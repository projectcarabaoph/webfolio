import Link from "next/link"
import { Icon } from '@iconify/react'

import ListComponent from '@/components/shared/list-component'
import { socialList } from '@/utils/constants'
import { TSocialList } from '@/utils/constants/_types'


export default function MarketingProfileSocials() {
    return (
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
    )
}
