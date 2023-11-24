import { XMarkIcon } from "@heroicons/react/24/solid";
import "./ProductDetail.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        context.isProductDetailsOpen ? "flex" : "hidden"
      } product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl"> Detail</h2>
        <XMarkIcon className="h-6 w-6 text-black" onClick={context.closeProductDetails}></XMarkIcon>
      </div>
    </aside>
  );
};
export default ProductDetail;
