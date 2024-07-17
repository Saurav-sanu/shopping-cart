import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-200">
      <div className="w-16 h-16">
        <img src={item.image} alt="img" className="w-full h-full object-cover rounded" />
      </div>
      <div className="flex-1">
        <h1 className="text-lg font-semibold">{item.title}</h1>
        <p className="text-sm text-gray-600">{item.description}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-xl font-bold">${item.price.toFixed(2)}</p>
          <div onClick={removeFromCart} className="cursor-pointer text-2xl text-red-600 hover:text-red-800 transition duration-200">
            <FcDeleteDatabase />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
