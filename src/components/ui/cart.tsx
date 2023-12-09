import { ShoppingCartIcon } from "lucide-react"
import { Badge } from "./badge"
import { CartContext } from "@/providers/cart"
import { useContext } from "react";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from '@stripe/stripe-js';

const Cart = () => {

    const { products, total, subtotal, totalDiscount } = useContext(CartContext);

    const handleFinishPurchaseClick = async () => {
        const checkout = await createCheckout(products)

        const stripe = await loadStripe(
            process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
        )

        stripe?.redirectToCheckout({
            sessionId: checkout.id,
        })
    }
    
    return(
        <div className="flex flex-col h-full gap-5 ">
            <Badge 
                className="w-fit gap-1 text-base uppercase border-primary px-3 py-[0.375rem] border-2"
                variant='outline'
            >
                    <ShoppingCartIcon size={16}/>
                    Carrinho
            </Badge>
            {/* RENDERIZAR PRODUTOS */}
            <div className="flex flex-col gap-5 h-full overflow-hidden">
                <ScrollArea className="h-full">
                    <div className="flex flex-col h-full gap-4">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <CartItem 
                                    key={product.id} 
                                    product={computeProductTotalPrice(product as any) as any}
                                />
                            ))) : ( <p className="text-center font-semibold">Carrinho Vazio</p> ) 
                        }
                    </div>
                </ScrollArea>
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
                <Button className="uppercase font-bold mt-7" onClick={handleFinishPurchaseClick}>Finalizar Compra</Button>
            </div>
        </div>
    )
}

export default Cart