import React from 'react'

interface IListItemProps {
  children: React.ReactNode
  onClick?(): void
}

const ListItem: React.FC<IListItemProps> = ({ children, onClick }) => {
  return (
    <div
      className="flex items-start break-all cursor-pointer hover:opacity-90 mb-[0.8rem] select-none"
      onClick={onClick}
    >
      <div className="leading-tight px-2 py-1 rounded-lg hover:bg-[rgba(97,90,241,0.4)] hover:font-bold text-[1.6rem] md:text-[1.8rem] lg:text-[1.8rem]">
        {children}
      </div>
    </div>
  )
}

export default ListItem
