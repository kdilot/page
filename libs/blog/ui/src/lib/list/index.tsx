import React from 'react'

interface IListProps {
  children: React.ReactNode
  title: string
}

const List: React.FC<IListProps> = ({ children, title }) => {
  return (
    <div className="group-only-of-type:mb-5 inline-block w-full pb-1">
      <p className="text-[2.5rem] mb-2 font-bold py-1 pb-3 select-none">
        {title}
      </p>
      <div className="display justify-center">{children}</div>
    </div>
  )
}

export default List
