import { useState } from "react";
import Header from "./component/Header";
import data from "./data";
import Gadget from "./component/Gadget";
import ClearBtn from "./component/ClearBtn";

function App() {
  const [products, setProducts] = useState(data);

  const totalProduct = products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  const totalCost = products.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );
  const removeBtn = (id) => {
    setProducts((pevProducts) =>
      pevProducts.filter((product) => product.id !== id)
    );
  };

  const incrementQuantity = (id) => {
    setProducts((prevState) =>
      prevState.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decrementQuantity = (id) => {
    const product = products.find((product) => product.id === id);
    if (product.quantity === 1
      
    ) {
      removeBtn(product.id);
      return;
    }
    setProducts((prevState) =>
      prevState.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity - 1,
            }
          : product
      )
    );
  };

  const clearhandler = () => {
    console.log("Clear All");
    setProducts([]);
  };

  return (
    <>
      <main className="min-h-screen bg-gray-100">
        <Header totalProduct={totalProduct} />
        <h1 className="text-4xl font-bold text-center mt-20">YOUR BAG</h1>
        <Gadget
          products={products}
          onIncrementQuantity={incrementQuantity}
          // incrementquantity={incrementquantity}
          onDecrementQuantity={decrementQuantity}
          // removeBtn={removeBtn}
          removeBtn={removeBtn}
        />
        <div className="max-w-5xl mx-auto px-4 text-lg font-bold border-t border-gray-600 pt-4 flex justify-between">
          <span>Total</span>
          <span>${totalCost}</span>
        </div>

        <ClearBtn onClearHandler={clearhandler} />
      </main>
    </>
  );
}

export default App;
