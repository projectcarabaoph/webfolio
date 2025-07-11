'use server';

import { rateLimit } from '@/utils/functions/redis-rate-limit';
import { serverClient } from '@/utils/supabase/server-client';
import { headers } from 'next/headers';

interface DownloadedFile {
    fileName: string;
    content: string;
    mime: string;
}
export const donwloadResume = async (): Promise<DownloadedFile> => {
    const fileName = process.env.NEXT_PUBLIC_RESUME_FILE_NAME as string;
    const bucket = process.env.NEXT_PUBLIC_RESUME_BUCKET_NAME as string;
    const folder = process.env.NEXT_PUBLIC_RESUME_BUCKET_FOLDER_NAME as string;

    const ip = (await headers()).get('x-forwarded-for') ?? 'unknown';

    const { success, reset } = await rateLimit.limit(ip);
    if (!success) {
        const wait = ((reset - Date.now()) / 1000).toFixed(1);
        throw new Error(`Rate limit exceeded. Try again in ${wait} seconds.`);
    }

    const supabase = await serverClient();
    const { data, error } = await supabase.storage
        .from(bucket)
        .download(`${folder}/${fileName}`);

    if (error || !data) throw new Error(error?.message);

    const arrayBuffer = await data.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString('base64');

    return {
        fileName,
        content: base64,
        mime: data.type,
    };
};
