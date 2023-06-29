import { useRouter } from 'next/router'
import Github from './images/github.svg'

/* eslint-disable-next-line */
export interface NextHeaderProps {}

export function NextHeader(props: NextHeaderProps) {
  const router = useRouter()
  return (
    <div className="w-full flex items-center justify-center px-4 select-none">
      <div className="flex w-full items-center justify-between py-3 md:w-1/2 lg:w-[55%]">
        <h1
          onClick={() => router.push('/')}
          className="cursor-pointer font-bold text-[2.2rem] text-white"
        >
          BLOG
        </h1>
        <div className="flex items-center justify-center w-[2.5rem] h-[2.5rem] cursor-pointer">
          <Github />
        </div>
      </div>
    </div>
  )
}

export default NextHeader
