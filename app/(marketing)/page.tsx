
'use client'

import Link from "next/link"
import { Icon } from '@iconify/react'
import ListComponent from "@/components/shared/list-component"
import SplitText from "@/components/shared/split-text"

import { socialList, stackList } from "@/utils/constants"
import { TSocialList, TStackList } from "@/utils/constants/_types"
import MarketingProfile from "./_components/marketing-profile"
import { appConfig } from "@/utils/configs/app.config"

const MarketingPage = () => {

    const { description } = appConfig()

    return (
        <div className="bg-neutral-950 p-2 h-full w-full flex flex-col items-center">
            <div className="w-full  h-full grid grid-cols-1 grid-rows-[auto_1fr]  md:grid-cols-[360px_1fr] md:grid-rows-none  max-w-7xl  p-2">

                <div>
                    <div className=' bg-neutral-950 flex flex-col gap-4 border border-[#27272a] rounded-md  p-4 '>

                        <MarketingProfile />

                        <div className='py-2'>
                            <ListComponent
                                as="ul"
                                className=' list-none w-full flex flex-row flex-wrap  items-center gap-4'
                                data={socialList}
                                renderItem={(social: TSocialList) => (

                                    <Link key={social.id} title={social.name} href={social.social_url}
                                        className="bg-[#170d27]  border border-[#392e4e] flex flex-col justify-center items-center p-1 rounded-md gap-2"
                                    >
                                        <Icon
                                            icon={social.icon}
                                            width="24"
                                            height="24"
                                            className=" text-[rgb(177,158,239)] hover:text-neutral-200"
                                        />
                                    </Link>

                                )}

                            />
                        </div>
                        <div className='mt-8 flex flex-col gap-4 '>
                            <span className='text-neutral-200 uppercase'>About</span>

                            <SplitText
                                text={description}
                                className="text-neutral-400 text-[14px]   "
                                delay={5}
                                duration={0.5}
                                ease="power3.out"
                                splitType="words"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="left"
                            />
                        </div>

                        <div className='mt-8  flex flex-col gap-4'>
                            <span className='text-neutral-200 uppercase'>Skills</span>
                            <ListComponent
                                as="ul"
                                className="flex flex-row flex-wrap gap-2"
                                data={stackList}
                                renderItem={(stack: TStackList) => (
                                    <SplitText
                                        key={stack.id}
                                        text={stack.name}
                                        className="bg-[#170d27] text-[rgb(177,158,239)]    text-[12px] p-2 rounded-md"
                                        delay={5}
                                        duration={0.5}
                                        ease="power3.out"
                                        splitType="words"
                                        from={{ opacity: 0, y: 40 }}
                                        to={{ opacity: 1, y: 0 }}
                                        threshold={0.1}
                                        rootMargin="-100px"
                                        textAlign="center"
                                    />

                                )}
                            />
                        </div>
                    </div>
                </div>

                <div>

                </div>

            </div>
        </div>

    )
}

export default MarketingPage