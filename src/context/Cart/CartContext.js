import React, { useState } from "react";
import Context from "./index";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const incrementItem = (itemId) => {

    const itemIndex = cartItems.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {

      setCartItems(prevItems => {
        return prevItems.map((item, index) => {
          if (index === itemIndex) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      });
    } else {

      setCartItems(prevItems => {
        return [...prevItems, { id: itemId, quantity: 1 }];
      });
    }
  };


  const decrementItem = (itemId) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return updatedItems.filter(item => item.quantity !== 0);
    });
  };



  return (
    <Context.Provider
      value={ {
        ...props,
        cartItems,
        incrementItem,
        decrementItem
      } }
    >
      { props.children }
    </Context.Provider>
  );
}

export default CartProvider;
