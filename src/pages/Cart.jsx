import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto p-4">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg w-full md:w-1/3">
            <div className="mb-4">
              <div className="text-2xl font-semibold">Your Cart</div>
              <div className="text-lg font-medium">Summary</div>
              <p className="mt-2">
                <span className="font-medium">Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="border-t pt-4">
              <p className="text-xl font-semibold mb-4">Total Amount: ${totalAmount.toFixed(2)}</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">
                Check Out Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Cart Empty</h1>
          <Link to="/">
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
