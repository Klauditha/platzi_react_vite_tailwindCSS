/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //Shopping cart - Increment quantity
  const [count, setCount] = useState(0);

  //Product detail: Open/close
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
  const openProductDetails = () => setIsProductDetailsOpen(true);
  const closeProductDetails = () => setIsProductDetailsOpen(false);

  //Product detail: show product details
  const [productToShow, setProductToShow] = useState({});
  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetails,
        closeProductDetails,
        isProductDetailsOpen,
        productToShow,
        setProductToShow,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
