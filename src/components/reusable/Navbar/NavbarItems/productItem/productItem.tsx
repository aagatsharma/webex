interface ProductItem {
  label: string;
  description: string;
  logo?: string;
}

const ProductItem = ({ label, description, logo }: ProductItem) => {
  return (
    <div className="flex gap-3">
      {logo && (
        <div className="self-start pt-2">
          <img src={logo} alt={label} />
        </div>
      )}
      <div className="flex flex-col">
        <h1 className="font-bold text-lg hover:underline hover:cursor-pointer ">
          {label}
        </h1>
        <h3 className="text-black/50 text-sm">{description}</h3>
      </div>
    </div>
  );
};

export default ProductItem;
