import ListComponent from "@/components/shared/list-component";
import { Card, CardContent } from "@/components/ui/card";
import { experienceList } from "@/utils/constants";
import { TExperienceList } from "@/utils/constants/_types";

export default function MarketingExperience() {
    return (
        <div className='flex flex-col gap-4 py-4 '>
            <span className='text-neutral-200 uppercase'>Experience</span>
            <ListComponent
                as="ul"
                className="w-full  list-none grid grid-cols-1  gap-4"
                data={experienceList}
                renderItem={(experience: TExperienceList) => (
                    <Card key={experience.id} className="bg-neutral-950  h-auto border border-custom-purple-800 w-full   mx-auto overflow-hidden">

                        <CardContent >
                            <div className="flex flex-col gap-2">
                                <span className='text-neutral-200 text-[14px]'>{experience.duration}</span>

                                <p className='text-neutral-200 font-medium '> <span className='text-purple-500'>{experience.company}</span> | {experience.position}</p>

                                <p className="text-sm text-neutral-400 leading-relaxed ">
                                    {experience.description}
                                </p>


                            </div>
                        </CardContent>
                    </Card>
                )}
            />
        </div>

    )
}
