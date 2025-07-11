'use client'


import Link from "next/link"
// import { Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MainLogo } from "@/public/assets/svgs"
import { donwloadResume } from "./actions";



export default function MarketingHeader() {

    const download = async () => {
        try {
            const { fileName, content, mime } = await donwloadResume();

            // Convert base64 back to Blob
            const byteCharacters = atob(content);
            const byteNumbers = new Array(byteCharacters.length).fill(null).map((_, i) => byteCharacters.charCodeAt(i));
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: mime });

            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();

            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 100);
        } catch (err) {
            console.error('Download failed:', err);
            alert('Failed to download resume');
        }
    };

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
                        <Button onClick={download} className="bg-custom-purple-950  uppercase  border border-custom-purple-800  text-neutral-200 hover:text-neutral-300" >
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
