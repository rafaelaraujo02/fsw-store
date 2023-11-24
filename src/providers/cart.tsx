import { Product } from "@prisma/client";
import { ReactNode, createContext } from "react";

interface CartProduct extends Product {
    quantity: number;
}

interface ICartContext {
    products: CartProduct[];
    cartBasePrice: number;
    cartTotalPrice: number;
    cartTotalDiscount: number;
}

const CartContext = createContext<ICartContext>({
    products: [],
    cartBasePrice: 0,
    cartTotalDiscount: 0,
    cartTotalPrice: 0
})

const CartProvider = ({children}: {children: ReactNode}) => {
    return(
        <CartContext.Provider value={{
            products: [],
            cartTotalDiscount: 0,
            cartTotalPrice: 0,
            cartBasePrice: 0
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider