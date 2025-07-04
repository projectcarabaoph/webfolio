import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'
import { clientKeys } from '@/utils/supabase/client-keys'

export async function serverClient() {
    const { url, anonKey } = clientKeys()

    const cookieStore = await cookies()

    const supabase = createServerClient(
        url,
        anonKey,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll();
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options));
                    } catch (error) {
                        console.error(error);
                    }
                }
            }
        }
    )
    return supabase
}
