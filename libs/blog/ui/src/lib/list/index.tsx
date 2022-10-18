import React from 'react';

interface IListProps {
  children: React.ReactNode;
  title: string;
}

const List: React.FC<IListProps> = ({ children, title }) => {
  return (
    <div className="group-only-of-type:mb-5 inline-block w-full pb-1">
      <p className="text-[2rem] mb-2 font-bold text-center bg-primary p-1 px-2 rounded-lg">
        {title}
      </p>
      <div className="pl-2 border-l-4 border-primary">{children}</div>
    </div>
  );
};

export default List;
