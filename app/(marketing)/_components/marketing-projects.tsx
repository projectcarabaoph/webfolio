'use client'


import Link from "next/link";

import ListComponent from "@/components/shared/list-component";
import MarketingProjectsCard from "@/app/(marketing)/_components/marketing-projects-card";
import { projectList } from "@/utils/constants";
import { IProjectList } from "@/utils/constants/_types";

export default function MarketingProjects() {
    return (
        <div className='flex flex-col gap-4 py-4 md:py-0 '>
            <span className='text-neutral-200 uppercase'>Projects</span>
            <ListComponent
                as="ul"
                className="w-full  list-none grid grid-cols-1  lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] xl:grid-cols-2 gap-4"
                data={projectList}
                renderItem={(project: IProjectList) => (
                    <Link href={`/projects/${project.id}`} key={project.id}>
                        <MarketingProjectsCard project={project} />
                    </Link>
                )}
            />
        </div>
    )
}
