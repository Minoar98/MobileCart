const ClearBtn = ({ onClearHandler }) => {
  return (
    <div className="text-center pt-12 ">
      <button
        onClick={onClearHandler}
        className="border border-red-500 text-red-600 px-6 py-2 rounded font-semibold tracking-wide"
      >
        {""} CLEAR CART
      </button>
    </div>
  );
};

export default ClearBtn;
