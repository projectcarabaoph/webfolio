import ListComponent from '@/components/shared/list-component'
import SplitText from '@/components/shared/split-text'
import { stackList } from '@/utils/constants'
import { TStackList } from '@/utils/constants/_types'

export default function MarketingProfileSkills() {
    return (
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
                        className="bg-custom-purple-950 text-custom-purple-200    text-[12px] p-2 rounded-md"
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
    )
}
