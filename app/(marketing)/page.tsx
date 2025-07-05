
'use client'

import MarketingProfile from "@/app/(marketing)/_components/marketing-profile"
import MarketingProfileSocials from "@/app/(marketing)/_components/marketing-profile-socials"
import MarketingProfileAbout from "@/app/(marketing)/_components/marketing-profile-about"
import MarketingProfileSkills from "@/app/(marketing)/_components/marketing-profile-skills"
import MarketingProjects from "@/app/(marketing)/_components/marketing-projects"
import MarketingExperience from "@/app/(marketing)/_components/marketing-experience"
import MarketingEducation from "@/app/(marketing)/_components/marketing-education"

const MarketingPage = () => {

    return (
        <div className="bg-neutral-950 p-2 h-full w-full flex flex-col items-center">
            <div className="w-full  h-full grid grid-cols-1 grid-rows-[auto_1fr]  md:grid-cols-[360px_1fr] md:grid-rows-none  max-w-7xl  p-2">
                <div>
                    <div className=' bg-neutral-950 flex flex-col gap-4 border border-[#27272a] rounded-md  p-4 '>
                        <MarketingProfile />
                        <MarketingProfileSocials />
                        <MarketingProfileAbout />
                        <MarketingProfileSkills />
                    </div>
                </div>

                <div className="md:px-4 ">
                    <MarketingProjects />
                    <MarketingExperience />
                    <MarketingEducation />
                </div>

            </div>
        </div>

    )
}

export default MarketingPage