import { useState } from "react";
import Header from "./component/Header";
import data from "./data";
import Gadget from "./component/Gadget";
import ClearBtn from "./component/ClearBtn";

function App() {
  const [products, setProducts] = useState(data);

  const removeBtn = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const incrementquantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };
  const decrementquantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity - 1 } : product
      )
    );
  };

  const clearHandler = () => {
    console.log("Clear all");
    setProducts([]);
  };

  const totalCost = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  // const totalCart = products.reduce((acc, product) => acc + product.quantity);

  return (
    <>
      <main className="min-h-screen bg-gray-100">
        <Header />
        <h1 className="text-4xl font-bold text-center mt-20">YOUR BAG</h1>

        <Gadget
          products={products}
          incrementquantity={incrementquantity}
          decrementquantity={decrementquantity}
          removeBtn={removeBtn}
        />
        <div className="max-w-5xl mx-auto px-4 text-lg font-bold border-t border-gray-600 pt-4 flex justify-between">
          <span>Total</span>
          <span>{totalCost}</span>
        </div>
        <ClearBtn onClearHandler={clearHandler} />
      </main>
    </>
  );
}

export default App;
