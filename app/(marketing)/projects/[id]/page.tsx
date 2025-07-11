import Link from "next/link"
import { Icon } from '@iconify/react'

import MarketingProjectsDetailsCard from "@/app/(marketing)/projects/[id]/_components/marketing-projects-details-card";
import { serverClient } from "@/utils/supabase/server-client";
import { IProjectList } from "@/utils/constants/_types";

const MarketingProjectsDetailsPage = async ({ params }: { params: { id: string } }) => {

    const { id } = await params

    const supabase = await serverClient()

    const { data: projectsData, error: projectError } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single<IProjectList>()

    const { data: technologiesData, error: techError } = await supabase
        .from('projects_technologies')
        .select('*')
        .in('id', projectsData?.technologies ?? []);

    const projects = {
        ...projectsData,
        technologies: technologiesData?.filter(tech =>
            projectsData?.technologies.includes(tech.id)
        )
    }

    return (
        <div>
            {projectError || techError ? (
                <div>
                    <span className="text-red-500">Failed to fetch project.</span>
                </div>
            ) : projectsData === null || projectsData === undefined ? (
                <div className="flex justify-center items-center min-h-96">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h1 className="text-neutral-200 text-4xl font-bold">404</h1>
                        <p className="text-neutral-400 uppercase">Project not found</p>
                        <Link
                            href="/"
                            className="bg-custom-purple-950 uppercase border border-custom-purple-800 text-custom-purple-200 hover:text-neutral-200 p-2 rounded-md text-white w-24 text-center"
                        >
                            Go back
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-4 p-2">
                    <Link
                        href="/"
                        className="text-neutral-200 hover:text-neutral-300 bg-custom-purple-950 border border-custom-purple-800 flex flex-row w-28 py-1 px-2 rounded-md gap-1"
                    >
                        <Icon icon="material-symbols:chevron-left" width="24" height="24" />
                        <span>Projects</span>
                    </Link>

                    <MarketingProjectsDetailsCard project={projects as IProjectList} />
                </div>
            )}
        </div>
    )
}

export default MarketingProjectsDetailsPage