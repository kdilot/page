import React from 'react'

interface IListItemProps {
  children: React.ReactNode
  onClick?(): void
}

const ListItem: React.FC<IListItemProps> = ({ children, onClick }) => {
  return (
    <div
      className="flex items-start break-all cursor-pointer hover:opacity-90 mb-[0.5rem]"
      onClick={onClick}
    >
      <div className="flex justify-center min-w-[8px] min-h-[8px] w-1 h-1 bg-primary rounded-full mr-2 mt-[6px]" />
      <span className="leading-tight hover:text-primary">{children}</span>
    </div>
  )
}

export default ListItem
