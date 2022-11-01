import Image from 'next/image'
import Avatar from './images/rk.png'

export interface TitleProps {
  title: string
  year: number
}

export function Title({ title, year }: TitleProps) {
  return (
    <div className="select-none">
      <div className="flex items-center">
        <div className="w-5 h-5 rounded-full overflow-hidden mr-2">
          <Image src={Avatar} width="100%" height="100%" />
        </div>
        <div className="flex opacity-80 gap-1 text-[1.5rem]">
          <span>kdilot</span>
          <span>·</span>
          <span>{year}</span>
        </div>
      </div>
      <h1 className="text-[3.5rem] font-bold">{title}</h1>
    </div>
  )
}

export default Title
