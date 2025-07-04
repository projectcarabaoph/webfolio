import { z } from "zod";



export function appConfig() {

    return z
        .object({
            name: z.string().min(1),
            description: z.string().min(1),
            designation: z.string().min(1),
            location: z.string().min(1),
            github: z.string().min(1),
            daily: z.string().min(1),
            email: z.string().min(1),
        })
        .parse({
            name: process.env.NEXT_PUBLIC_USER_NAME,
            description: process.env.NEXT_PUBLIC_USER_DESCRIPTION,
            designation: process.env.NEXT_PUBLIC_USER_DESIGNATION,
            location: process.env.NEXT_PUBLIC_USER_LOCATION,
            github: process.env.NEXT_PUBLIC_GITHUB_URL,
            daily: process.env.NEXT_PUBLIC_DAILY_URL,
            email: process.env.NEXT_PUBLIC_EMAIL_TO,
        });
}