
import Link from "next/link"

const NotFoundPage = () => {
  return (
    <div className='flex w-full min-h-dvh h-auto justify-center items-center '>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1>404 Page not found</h1>
        <Link href={"/"} className='bg-slate-400 hover:bg-slate-400/90 p-2 rounded-md text-white w-24 text-center'>Go back</Link>
      </div>
    </div>
  )
}

export default NotFoundPage