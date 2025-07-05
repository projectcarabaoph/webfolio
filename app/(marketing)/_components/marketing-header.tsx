
import Link from "next/link"
import { Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MainLogo } from "@/public/assets/svgs"

export default function MarketingHeader() {
    return (
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
    )
}
