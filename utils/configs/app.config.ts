import { z } from "zod";


const {
    NEXT_PUBLIC_USER_NAME,
    NEXT_PUBLIC_USER_DESCRIPTION,
    NEXT_PUBLIC_USER_DESIGNATION,
    NEXT_PUBLIC_USER_LOCATION,
    NEXT_PUBLIC_GITHUB_URL,
    NEXT_PUBLIC_DAILY_URL,
    NEXT_PUBLIC_EMAIL_TO,
} = process.env

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
            name: NEXT_PUBLIC_USER_NAME,
            description: NEXT_PUBLIC_USER_DESCRIPTION,
            designation: NEXT_PUBLIC_USER_DESIGNATION,
            location: NEXT_PUBLIC_USER_LOCATION,
            github: NEXT_PUBLIC_GITHUB_URL,
            daily: NEXT_PUBLIC_DAILY_URL,
            email: NEXT_PUBLIC_EMAIL_TO,
        });
}