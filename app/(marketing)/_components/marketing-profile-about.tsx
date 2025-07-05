import SplitText from "@/components/shared/split-text";
import { appConfig } from "@/utils/configs/app.config";

export default function MarketingProfileAbout() {
    const { description } = appConfig()
    return (
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
    )
}
