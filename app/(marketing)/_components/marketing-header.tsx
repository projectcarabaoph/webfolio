
import Link from "next/link"
// import { Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MainLogo } from "@/public/assets/svgs"

export default function MarketingHeader() {
    return (
        <header className="bg-neutral-950 z-10 p-2 px-4 w-full sticky  top-0 md:col-span-2 flex justify-center border-b border-[#27272a]">
            <nav className="w-full h-full max-w-7xl ">
                <ul className="list-none p-0 flex justify-between items-center">
                    <li className="flex flex-row gap-2 justify-between items-center">
                        <Link href="/">
                            <MainLogo className="w-8 h-8  fill-custom-purple-200   hover:fill-neutral-200" />
                        </Link>
                    </li>
                    <li className="flex flex-row gap-2 justify-between items-center">
                        <Button className="bg-custom-purple-950  uppercase  border border-custom-purple-800  text-custom-purple-200 hover:text-neutral-200" >
                            Resume
                        </Button>
                        {/* <Button className=" bg-custom-purple-950  border border-custom-purple-800  text-custom-purple-200 hover:text-neutral-200" >
                            <Sun />
                        </Button> */}
                    </li>
                </ul>
            </nav>
        </header>
    )
}
