import { Product } from "@prisma/client"

export interface ProductWithTotalPrice extends Product {
    totalPrice: number;
}

export const computeProductTotalPrice = (product: Product): ProductWithTotalPrice => {
    //Se não tiver desconto, retorna o produto, setando seu totalPrice como o preço base
    if(product.discountPercentage === 0){
        return {
            ...product,
            totalPrice: Number(product.basePrice),
        }
    }

    const totalPrice = Number(product.basePrice) * (product.discountPercentage / 100);

    return {
        ...product,
        totalPrice,
    }
}