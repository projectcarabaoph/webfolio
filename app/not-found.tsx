
import Link from "next/link"

const NotFoundPage = () => {
  return (
    <div className='bg-neutral-950 flex w-full min-h-dvh h-auto justify-center items-center '>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-neutral-200 text-4xl font-bold">404 </h1>
        <p className="text-neutral-400 uppercase">Page not found</p>
        <Link href={"/"} className='bg-custom-purple-950 uppercase  border border-custom-purple-800  text-neutral-200 hover:text-neutral-300 p-2 rounded-md text-white w-24 text-center'>Go back</Link>
      </div>
    </div>

  )
}

export default NotFoundPage