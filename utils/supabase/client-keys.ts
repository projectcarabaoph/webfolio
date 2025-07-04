import { z } from "zod";

export function clientKeys() {
    return z
        .object({
            url: z.string().min(1),
            anonKey: z.string().min(1),
        })
        .parse({
            url: process.env.NEXT_PUBLIC_SUPABASE_URL,
            anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        });
}
