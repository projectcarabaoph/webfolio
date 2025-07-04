import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { clientKeys } from '@/utils/supabase/client-keys'




export async function middlewareClient(request: NextRequest) {
    const { url, anonKey } = clientKeys()

    let response = NextResponse.next({
        request,
    })

    const supabase = createServerClient(
        url,
        anonKey,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
                    response = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options)
                    )
                }
            }
        }
    )

    const { data: { user } } = await supabase.auth.getUser()

    const { pathname } = request.nextUrl
    const nextUrl = request.nextUrl.clone()

    if (user && !pathname.startsWith("/")) {
        nextUrl.pathname = "/"
        return NextResponse.redirect(nextUrl)
    }

    if (!user && pathname.startsWith("/")) {
        nextUrl.pathname = "/auth/sign-in"
        return NextResponse.redirect(nextUrl)
    }


    return response
}
