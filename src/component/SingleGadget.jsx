import { ChevronDown, ChevronUp } from "lucide-react";

const SingleGadget = ({
  id,
  name,
  price,
  img,
  quantity,
  onIncrementQuantity,
  onDecrementQuantity,
  removeBtn,
}) => {
  return (
    <article className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200 px-4">
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
        <img
          src={img}
          alt={name}
          className="bg-none w-24 h-24 object-cover rounded"
        />
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
          <p className="text-gray-500 font-medium">${price}</p>
          <button
            onClick={() => removeBtn(id)}
            className="text-blue-600 text-md pt-2"
          >
            remove
          </button>
        </div>
      </div>
      <div className="flex items-center sm:flex-col gap-2 self-end sm:self-auto">
        <button
          onClick={() => onIncrementQuantity(id)}
          className="text-blue-600"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        <span className="font-medium">{quantity}</span>
        <button
          onClick={() => onDecrementQuantity(id)}
          className="text-blue-600"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </article>
  );
};

export default SingleGadget;
