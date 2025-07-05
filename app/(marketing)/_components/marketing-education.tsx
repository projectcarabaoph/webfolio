'use client'

import ListComponent from "@/components/shared/list-component";
import { Card, CardContent } from "@/components/ui/card";
import { educationList } from "@/utils/constants";
import { TEducationList } from "@/utils/constants/_types";

export default function MarketingEducation() {
    return (
        <div className='flex flex-col gap-2 py-4'>
            <span className='text-neutral-200 uppercase'>Education</span>
            <ListComponent
                as="ul"
                className="w-full  list-none flex flex-col-reverse  gap-4"
                data={educationList}
                renderItem={(education: TEducationList) => (
                    <Card key={education.id} className="bg-neutral-950  h-auto border border-[#392e4e] w-full   mx-auto overflow-hidden">

                        <CardContent >
                            <div className="flex flex-col gap-2">
                                <span className='text-neutral-200 text-[14px]'>{education.duration}</span>

                                <p className='text-neutral-200 font-medium '> <span className='text-purple-500'>{education.company}</span> | {education.position}</p>

                                <p className="text-sm text-neutral-400 leading-relaxed ">
                                    {education.description}
                                </p>


                            </div>
                        </CardContent>
                    </Card>
                )}
            />
        </div>

    )
}
