'use client'

import MarketingProfile from "@/app/(marketing)/_components/marketing-profile"
import MarketingProfileSocials from "@/app/(marketing)/_components/marketing-profile-socials"
import MarketingProfileAbout from "@/app/(marketing)/_components/marketing-profile-about"
import MarketingProfileSkills from "@/app/(marketing)/_components/marketing-profile-skills"

export default function MarketingProfileContainer() {
    return (
        <aside className="bg-neutral-950 md:sticky md:top-16 md:h-[calc(100dvh-64px)] py-2">
            <div className='bg-neutral-950  flex flex-col gap-4 border border-[#27272a] rounded-md  p-4 '>
                <MarketingProfile />
                <MarketingProfileSocials />
                <MarketingProfileAbout />
                <MarketingProfileSkills />
            </div>
        </aside>
    )
}
