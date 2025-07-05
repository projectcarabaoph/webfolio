
import type { ReactNode } from "react"
import MarketingHeader from "@/app/(marketing)/_components/marketing-header"
import MarketingProfileContainer from "@/app/(marketing)/_components/marketing-profile-container"

const MarketingLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-neutral-950 flex justify-center">
            <div
                className="bg-neutral-950 w-full max-w-7xl grid grid-cols-1 grid-rows-[64px_auto_1fr] md:grid-cols-[360px_1fr] md:grid-rows-[64px_1fr]  min-h-dvh h-auto px-2 gap-2"
            >
                <MarketingHeader />
                <MarketingProfileContainer />
                <main className="w-full h-full">
                    {children}
                </main>

            </div>
        </div>
    )
}

export default MarketingLayout