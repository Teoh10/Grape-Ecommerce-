import {createContext,createElement,useState} from "react";
import { PRODUCTS } from "../product";

export const ShopContext = createContext(null);

const getDefaultCart = ()=> {
    let cart = {};
    for (let i = 1; i<PRODUCTS.length +1 ;i++){
        cart[i] = 0;
    }
    return cart;
};
export const ProductList = () =>{
    const [productsList,setProducts] = useState(PRODUCTS);
    return productsList;
}

export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());

    const [productsList,setProducts] = useState(PRODUCTS);
    
    const getProductList = () => {
        return productsList;
    }
    const addToCart = (itemId) => {
        setCartItems((prev)=> ({...prev,[itemId]:prev[itemId] + 1}));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev)=> ({...prev,[itemId]:prev[itemId] -1 }));
    };

    const updateCartItemCount = (newAmount,itemId) => {
        setCartItems((prev)=> ({...prev,[itemId]:newAmount}));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }

        return totalAmount;
    }

    const contextValue = {cartItems,addToCart,removeFromCart,updateCartItemCount, getTotalCartAmount,getProductList};
    console.log(cartItems);
    return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    );
};