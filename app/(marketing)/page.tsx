'use client'


import MarketingProjects from "@/app/(marketing)/_components/marketing-projects"
import MarketingExperience from "@/app/(marketing)/_components/marketing-experience"
import MarketingEducation from "@/app/(marketing)/_components/marketing-education"

const MarketingPage = () => {

    return (
        <div className="bg-neutral-950 p-2 h-full w-full flex flex-col items-center">

            <MarketingProjects />
            <MarketingExperience />
            <MarketingEducation />

        </div>

    )
}

export default MarketingPage