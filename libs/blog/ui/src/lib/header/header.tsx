import { useRouter } from 'next/router'
import Github from './images/github.svg'
import Arrow from './images/arrow-left.svg'

/* eslint-disable-next-line */
export interface NextHeaderProps {}

export function NextHeader(props: NextHeaderProps) {
  const router = useRouter()
  const hasPage = router.pathname === '/'

  return (
    <div className="w-full flex items-center justify-center px-3">
      <div className="flex w-full items-center justify-between py-3 md:w-1/2 lg:w-[55%]">
        {hasPage ? (
          <h1
            onClick={() => router.push('/')}
            className="cursor-pointer font-bold text-[2.5rem] text-slate-800"
          >
            BLOG
          </h1>
        ) : (
          <div
            className="flex items-center justify-center w-[4rem] h-[4rem] rounded-[0.5rem] cursor-pointer hover:bg-[#f5f6f7]"
            onClick={() => router.back()}
          >
            <Arrow />
          </div>
        )}
        <div className="flex items-center justify-center w-[4rem] h-[4rem] p-[0.8rem] rounded-[0.5rem] cursor-pointer hover:bg-[#f5f6f7]">
          <Github />
        </div>
      </div>
    </div>
  )
}

export default NextHeader
