export interface TitleProps {
  title: string
  year: number
}

export function Title({ title, year }: TitleProps) {
  return (
    <div className="select-none">
      <h1 className="text-[3.5rem] font-bold">{title}</h1>
    </div>
  )
}

export default Title
