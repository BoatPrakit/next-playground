interface ItemProps {
  item: string;
  somethingFn: (input: string) => void;
}

export const Item: React.FC<ItemProps> = ({ item, somethingFn }) => {
  return (
    <div className="flex">
      <div>{item}</div>
      <button className="bg-red-400 mx-10" onClick={() => somethingFn(item)}>
        +
      </button>
    </div>
  );
};
