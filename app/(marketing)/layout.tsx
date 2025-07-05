
import type { ReactNode } from "react"
import MarketingHeader from "@/app/(marketing)/_components/marketing-header"

const MarketingLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-neutral-950 bg- grid grid-cols-1 grid-rows-[64px_1fr] min-h-dvh h-auto place-items-center">
            <MarketingHeader />
            <main className="w-full h-full ">
                {children}
            </main>
        </div>
    )
}

export default MarketingLayout