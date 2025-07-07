import { z } from "zod";

export function clientKeys() {
    return z
        .object({
            url: z.string().min(1),
            anonKey: z.string().min(1),
            upstashUrl: z.string().min(1),
            upstashToken: z.string().min(1),
        })
        .parse({
            url: process.env.NEXT_PUBLIC_SUPABASE_URL,
            anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
            upstashUrl: process.env.UPSTASH_REDIS_REST_URL,
            upstashToken: process.env.UPSTASH_REDIS_REST_TOKEN,
        });
}
