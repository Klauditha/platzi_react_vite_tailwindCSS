/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //Shopping cart - Increment quantity
  const [count, setCount] = useState(0);

  //Product detail: Open/close
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
  const openProductDetails = () => setIsProductDetailsOpen(true);
  const closeProductDetails = () => setIsProductDetailsOpen(false);

  //Checkout side menu: Open/close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  //Product detail: show product details
  const [productToShow, setProductToShow] = useState({});

  // Shopping cart - Add product
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart - Order
  const [order, setOrder] = useState([]);

  //Get products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  //Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);

  //Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle);
    }
    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory);
    }
    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }
    if (!searchType) {
      return items;
    }
  };
  useEffect(() => {
    if (searchByTitle && searchByCategory) {
      setFilteredItems(
        filterBy(
          'BY_TITLE_AND_CATEGORY',
          items,
          searchByTitle,
          searchByCategory
        )
      );
    }
    if (searchByTitle && !searchByCategory) {
      setFilteredItems(
        filterBy('BY_TITLE', items, searchByTitle, searchByCategory)
      );
    }
    if (!searchByTitle && searchByCategory) {
      setFilteredItems(
        filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory)
      );
    }
    if (!searchByTitle && !searchByCategory) {
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
    }
  }, [items, searchByTitle, searchByCategory]);

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
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
