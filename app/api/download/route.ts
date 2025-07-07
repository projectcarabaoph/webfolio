import { NextResponse } from 'next/server'

import { rateLimit } from '@/utils/functions/redis-rate-limit'
import { serverClient } from '@/utils/supabase/server-client'


export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const filePath = searchParams.get('path')
    const bucket = searchParams.get('bucket') || 'default'

    if (!filePath) {
        return NextResponse.json({ error: 'Missing file path' }, { status: 400 })
    }

    const ip = req.headers.get('x-forwarded-for') ?? 'anonymous'
    const { success } = await rateLimit.limit(ip)

    if (!success) {
        return NextResponse.json(
            { error: 'Too many requests. Please try again later.' },
            { status: 429 }
        )
    }


    const supabase = await serverClient()

    // Supabase Storage file download
    const { data, error } = await supabase
        .storage
        .from(bucket)
        .download(filePath)

    if (error || !data) {
        return NextResponse.json(
            { error: error?.message || 'Failed to download file' },
            { status: 500 }
        )
    }

    const buffer = await data.arrayBuffer()
    return new Response(buffer, {
        headers: {
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': `attachment; filename="${filePath.split('/').pop()}"`
        }
    })
}
