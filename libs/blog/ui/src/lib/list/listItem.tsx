import React from 'react'

interface IListItemProps {
  children: React.ReactNode
  onClick?(): void
}

const ListItem: React.FC<IListItemProps> = ({ children, onClick }) => {
  return (
    <div
      className="flex items-start break-all cursor-pointer select-none"
      onClick={onClick}
    >
      <div className="leading-[160%] tracking-tighter p-[1rem] rounded-[0.5rem] hover:bg-[#f1f3f5] text-[1.6rem] md:text-[1.8rem] lg:text-[1.8rem]">
        {children}
      </div>
    </div>
  )
}

export default ListItem
