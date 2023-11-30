'use client';

import { ProductWithTotalPrice } from "@/helpers/product";
import { ReactNode, createContext, useState } from "react";

export interface CartProduct extends ProductWithTotalPrice {
    quantity: number;
}

interface ICartContext {
    products: CartProduct[];
    cartBasePrice: number;
    cartTotalPrice: number;
    cartTotalDiscount: number;
    addProductToCart: (product: CartProduct) => void;
}

export const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0,
    cartTotalDiscount: 0,
    addProductToCart: () => {},
})
//2:14
const CartProvider = ({children}: {children: ReactNode}) => {
    
    const [products, setProducts] = useState<CartProduct[]>([])

    const addProductToCart = (product: CartProduct) => {

        //se o produto já estiver no carrinho, só aumenta a quantidade
        const productIsAlreadyOnCart = products.some(cartProduct => cartProduct.id === product.id)

        if(productIsAlreadyOnCart){
            setProducts(prev => prev.map(cartProduct => {
                if(cartProduct.id === product.id){
                    return{
                        ...cartProduct,
                        quantity: cartProduct.quantity + product.quantity
                    }
                }
                return cartProduct
                }),
            );

            return;
        }
        //senão, adicione o produto à lista
        setProducts((prev) => [...prev, product])
    }

    return(
        <CartContext.Provider 
            value={{
                products,
                addProductToCart,
                cartTotalDiscount: 0,
                cartTotalPrice: 0,
                cartBasePrice: 0
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider