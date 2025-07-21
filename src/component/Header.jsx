import { ShoppingBag } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#1d78d0] text-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-semibold">UseReducer</h1>
        <div className="relative">
          <ShoppingBag className="w-7 h-7" />
          <span className="absolute -top-2.5 -right-4 w-auto px-2 bg-red-400 text-center rounded-md">
            99
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
//  bg-[#1d78d0]
