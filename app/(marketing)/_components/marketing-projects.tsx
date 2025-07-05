'use client'

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ListComponent from "@/components/shared/list-component";
import SplitText from "@/components/shared/split-text";
import { Card, CardContent } from "@/components/ui/card";
import { projectList } from "@/utils/constants";
import { IProjectList, TTechnologies } from "@/utils/constants/_types";


export default function MarketingProjects() {
    return (
        <div className='flex flex-col gap-4 py-4 md:py-0 '>
            <span className='text-neutral-200 uppercase'>Projects</span>
            <ListComponent
                as="ul"
                className="w-full  list-none grid grid-cols-1  lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] xl:grid-cols-2 gap-4"
                data={projectList}
                renderItem={(project: IProjectList) => (
                    <Link href="/" key={project.id}>
                        <Card className="hover:shadow-lg  hover:shadow-[#170d27] bg-neutral-950 border  p-0 min-h-[384px] h-auto border-[#392e4e] w-full   mx-auto overflow-hidden">
                            <div className="relative h-32 bg-red-200 ">
                                <Image src={project.images[0]} alt="Project conclusion dashboard" fill className="top-0 object-cover" />
                            </div>

                            <CardContent >
                                <div className="flex flex-col gap-2">
                                    <span className="text-lg font-semibold text-neutral-200 hover:underline">{project.title}</span>

                                    <ListComponent
                                        as="div"
                                        className="flex flex-row flex-wrap gap-2"
                                        data={project.technologies}
                                        renderItem={(tech: TTechnologies) => (
                                            <SplitText
                                                key={tech.name}
                                                text={tech.name}
                                                className="bg-[#170d27] text-[rgb(177,158,239)]    text-[12px] p-2 rounded-md"
                                                delay={5}
                                                duration={0.5}
                                                ease="power3.out"
                                                splitType="chars"
                                                from={{ opacity: 0, y: 40 }}
                                                to={{ opacity: 1, y: 0 }}
                                                threshold={0.1}
                                                rootMargin="-100px"
                                                textAlign="center"
                                            />

                                        )}
                                    />

                                    <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>

                                    <span className="flex items-center text-neutral-200 text-sm font-medium hover:text-neutral-300 transition-colors pb-4">
                                        Read more
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                )}
            />
        </div>
    )
}
