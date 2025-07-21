import SingleGadget from "./SingleGadget";

const Gadget = ({ products, removeBtn, incrementquantity, decrementquantity }) => {
  return (
    <article className="max-w-5xl mx-auto  pt-6">
      <div className="flex flex-col gap-6">
        {products.map((product) => (
          <SingleGadget
            key={product.id}
            {...product}
            incrementquantity={incrementquantity}
            decrementquantity={decrementquantity}
            removeBtn={removeBtn}
          />
        ))}
      </div>
    </article>
  );
};

export default Gadget;
