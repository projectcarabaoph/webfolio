
import MarketingProjects from "@/app/(marketing)/_components/marketing-projects"
import MarketingExperience from "@/app/(marketing)/_components/marketing-experience"
import MarketingEducation from "@/app/(marketing)/_components/marketing-education"
import { serverClient } from "@/utils/supabase/server-client"
import { IProjectList } from "@/utils/constants/_types"

const MarketingPage = async () => {

    const supabase = await serverClient()

    const { data: projectsData, error: projectError } = await supabase
        .from('projects')
        .select('*');


    const { data: technologiesData, error: techError } = await supabase
        .from('projects_technologies')
        .select('*')
        .in('id', projectsData?.flatMap(p => p.technologies) ?? []);

    const projectList = projectsData?.map(project => ({
        ...project,
        technologies: technologiesData?.filter(tech =>
            project.technologies.includes(tech.id)
        )
    }));

    return (
        <div className="bg-neutral-950 p-2 h-full w-full flex flex-col items-center">

            {projectError || techError ? (
                <div>
                    <span className="text-red-500">Failed to fetch projects.</span>
                </div>
            ) : (
                <>
                    <MarketingProjects projectList={projectList as IProjectList[]} />
                    <MarketingExperience />
                    <MarketingEducation />
                </>
            )}

        </div>

    )
}

export default MarketingPage