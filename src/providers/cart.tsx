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
    decreaseProductQuantity: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0,
    cartTotalDiscount: 0,
    addProductToCart: () => {},
    decreaseProductQuantity: () => {},
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

    const decreaseProductQuantity = (productId: string) => {  
        setProducts(prev => prev.map(cartProduct => {
            //se a quantidade for 1, remove o produto do carrinho
            if(cartProduct.id === productId) {
                return {
                    ...cartProduct,
                    quantity: cartProduct.quantity - 1
                }
            }
            return cartProduct;
        })//remove caso a quantidade seja 0
        .filter((cartProduct) => cartProduct.quantity > 0)
        )
    }

    return(
        <CartContext.Provider 
            value={{
                products,
                addProductToCart,
                decreaseProductQuantity,
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