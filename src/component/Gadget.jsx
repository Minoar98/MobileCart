import SingleGadget from "./SingleGadget";

const Gadget = ({
  products,
  removeBtn,
  onIncrementQuantity,
  onDecrementQuantity,
}) => {
  return (
    <article className="max-w-5xl mx-auto px-4 pt-6">
      <div className="flex flex-col gap-6">
        {products.length > 0 &&
          products.map((product) => (
            <SingleGadget
              key={product.id}
              {...product}
              onIncrementQuantity={onIncrementQuantity}
              onDecrementQuantity={onDecrementQuantity}
              removeBtn={removeBtn}
            />
          ))}
      </div>
    </article>
  );
};

export default Gadget;
