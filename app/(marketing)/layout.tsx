

'use client'

import { Button } from "@/components/ui/button"
import { MainLogo } from "@/public/assets/svgs"
import { Sun } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"

const MarketingLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-neutral-950 bg- grid grid-cols-1 grid-rows-[64px_1fr] min-h-dvh h-auto place-items-center">
            <header className="  p-2 px-4 w-full max-w-7xl border-b border-[#27272a]">
                <nav className="w-full h-full ">
                    <ul className="list-none p-0 flex justify-between items-center">
                        <li className="flex flex-row gap-2 justify-between items-center">
                            <Link href="/">
                                <MainLogo className="w-8 h-8  fill-[rgb(177,158,239)] hover:fill-neutral-200" />
                            </Link>
                        </li>
                        <li className="flex flex-row gap-2 justify-between items-center">
                            <Button className="bg-[#170d27] uppercase  border border-[#392e4e]  text-[rgb(177,158,239)] hover:text-neutral-200" >
                                Resume
                            </Button>
                            <Button className="bg-[#170d27]  border border-[#392e4e]  text-[rgb(177,158,239)] hover:text-neutral-200" >
                                <Sun />
                            </Button>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="w-full h-full ">
                {children}
            </main>
        </div>
    )
}

export default MarketingLayout