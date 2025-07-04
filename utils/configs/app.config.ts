import { z } from "zod";


const {
    USER_NAME,
    USER_DESCRIPTION,
    USER_DESIGNATION,
    USER_LOCATION,
    GITHUB_URL,
    DAILY_URL,
    EMAIL_TO,
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
            name: USER_NAME,
            description: USER_DESCRIPTION,
            designation: USER_DESIGNATION,
            location: USER_LOCATION,
            github: GITHUB_URL,
            daily: DAILY_URL,
            email: EMAIL_TO,
        });
}
