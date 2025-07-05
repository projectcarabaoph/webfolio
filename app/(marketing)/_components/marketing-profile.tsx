'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { appConfig } from "@/utils/configs/app.config"

export default function MarketingProfile() {
    const { name, designation, location } = appConfig()
    return (
        <>
            <Avatar className="w-16 h-16">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JE</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
                <h1 className="text-neutral-200  text-2xl font-medium ">{name}</h1>
                <div className="flex flex-col">
                    <h2 className="text-neutral-400 text-base ">{designation}</h2>
                    <h3 className="text-neutral-400 text-[14px] ">{location}</h3>
                </div>
            </div>
        </>
    )
}
