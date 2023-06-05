import Arrow from './images/arrow-left.svg'
import { useRouter } from 'next/router'

export interface TitleProps {
  title: string
  year: number
}

export function Title({ title, year }: TitleProps) {
  const router = useRouter()
  return (
    <div className="select-none">
      <div className="flex items-center justify-between">
        <div
          className="flex items-center justify-center w-[5rem] h-[5rem] cursor-pointer rounded-lg"
          onClick={() => router.back()}
        >
          <Arrow />
        </div>
      </div>
      <h1 className="text-[3.5rem] font-bold">{title}</h1>
    </div>
  )
}

export default Title
