interface ResourceItemProps {
  item: string;
}

const ResourceItem = ({ item }: ResourceItemProps) => {
  return (
    <div>
      <h1 className="font-bold text-lg hover:underline hover:cursor-pointer ">
        {item}
      </h1>
    </div>
  );
};

export default ResourceItem;
