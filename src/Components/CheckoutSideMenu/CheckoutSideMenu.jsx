import { XMarkIcon } from "@heroicons/react/24/solid";
import "./CheckoutSideMenu.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";
import OrderCard from "../OrderCard/OrderCard";
import { totalPrice } from "../../utils/Utils";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(filteredProducts);
  };
  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu  flex-col fixed top-20 right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl"> My Orders</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={context.closeCheckoutSideMenu}
          ></XMarkIcon>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.images}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6">
        <p className="flex justify-between items-center">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
        </p>
      </div>
    </aside>
  );
};
export default CheckoutSideMenu;
