

'use client'

import { Button } from "@/components/ui/button"
import { MainLogo } from "@/public/assets/svgs"
import { Sun } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"

const MarketingLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-neutral-950 bg- grid grid-cols-1 grid-rows-[64px_1fr_64px] min-h-dvh h-auto place-items-center">
            <header className=" border border-white p-2 w-full max-w-7xl">
                <nav className="w-full h-full">
                    <ul className="list-none p-0 flex justify-between items-center">
                        <li className="flex flex-row gap-2 justify-between items-center">
                            <Link href="/">
                                <MainLogo className="w-8 h-8 fill-neutral-400 hover:fill-neutral-200" />
                            </Link>
                        </li>
                        <li className="flex flex-row gap-2 justify-between items-center">
                            <Button className="bg-neutral-900 text-neutral-400 hover:text-neutral-200" >
                                Resume
                            </Button>
                            <Button className="bg-neutral-900 text-neutral-400 hover:text-neutral-200" >
                                <Sun />
                            </Button>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="w-full h-full border border-white">
                {children}
            </main>
            <footer className="border border-white p-2 w-full  max-w-7xl">
                <nav>
                    <ul>
                        <li>
                            footer
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    )
}

export default MarketingLayout