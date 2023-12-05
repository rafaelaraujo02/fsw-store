import { ShoppingCartIcon } from "lucide-react"
import { Badge } from "./badge"
import { CartContext } from "@/providers/cart"
import { useContext } from "react";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "./separator";

const Cart = () => {

    const { products, total, subtotal, totalDiscount } = useContext(CartContext);
    
    return(
        <div className="flex flex-col gap-5">
            <Badge 
                className="w-fit gap-1 text-base uppercase border-primary px-3 py-[0.375rem] border-2"
                variant='outline'
            >
                    <ShoppingCartIcon size={16}/>
                    Carrinho
            </Badge>
            {/* RENDERIZAR PRODUTOS */}
            <div className="flex flex-col gap-5">
                {products.map((product) => (
                    <h1 key={product.id}>
                        <CartItem key={product.id} product={computeProductTotalPrice(product as any) as any}/>
                    </h1>
                ))}
            </div>

            <div className="flex flex-col gap-3">
                <Separator/>

                <div className="flex items-center justify-between text-xs">
                    <p>Subtotal</p>
                    <p>R$ {subtotal.toFixed(2)}</p>
                </div>

                <Separator/>

                <div className="flex items-center justify-between text-xs">
                    <p>Entrega</p>
                    <p>GRÁTIS</p>
                </div>

                <Separator/>

                <div className="flex items-center justify-between text-xs">
                    <p>Descontos</p>
                    <p>- R$ {totalDiscount.toFixed(2)}</p>
                </div>

                <Separator/>

                <div className="flex items-center justify-between text-sm font-bold">
                    <p>Total</p>
                    <p>R$ {total.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}

export default Cart