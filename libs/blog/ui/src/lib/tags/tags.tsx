export interface TagsProps {
  data: string[];
}

export function Tags({ data }: TagsProps) {
  return (
    <div className="gap-1 flex flex-wrap rounded mb-6 select-none">
      {data.map((tag, index) => (
        <div
          key={`${tag}${index}`}
          className="bg-primary rounded px-1 py-[0.2rem] text-[1.4rem]"
        >
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Tags;
