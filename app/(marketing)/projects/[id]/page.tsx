import Link from "next/link"
import { Icon } from '@iconify/react'

import { projectList } from "@/utils/constants"
import MarketingProjectsDetailsCard from "@/app/(marketing)/projects/[id]/_components/marketing-projects-details-card";

const MarketingProjectsDetailsPage = ({ params }: { params: { id: string } }) => {

    const { id } = params

    const project = projectList.find((project) => project.id === id)

    return (
        <div>
            {project === undefined ? (
                <div className="flex justify-center items-center min-h-96">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h1 className="text-neutral-200 text-4xl font-bold">404</h1>
                        <p className="text-neutral-400 uppercase">Project not found</p>
                        <Link href="/" className='bg-custom-purple-950 uppercase  border border-custom-purple-800  text-custom-purple-200 hover:text-neutral-200 p-2 rounded-md text-white w-24 text-center'>Go back</Link>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-4 p-2">
                    <Link href="/"
                        className=" text-custom-purple-200 hover:text-neutral-200 bg-custom-purple-950  border border-custom-purple-800 flex flex-row  w-28 py-1 px-2 rounded-md gap-1 "
                    >
                        <Icon
                            icon="material-symbols:chevron-left"
                            width="24"
                            height="24"
                        />
                        <span>Projects</span>
                    </Link>
                    <MarketingProjectsDetailsCard project={project} />

                </div>
            )}
        </div>
    )
}

export default MarketingProjectsDetailsPage