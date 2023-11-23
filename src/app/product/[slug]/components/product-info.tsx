'use client';

import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
    // Pick vai fazer com que o product receba apenas os campos informados
    product: Pick<
        ProductWithTotalPrice,
        "basePrice"
        | "description"
        | "discountPercentage"
        | "totalPrice"
        | "name"
    >
}
// 41:20
const ProductInfo = ({ product: { basePrice, description, discountPercentage, totalPrice, name } }: ProductInfoProps) => {
    
    const [quantity, setQuantity] = useState(1)

    const handleLeftClick = () => {
        setQuantity((prev) => (prev === 1 ? prev : prev - 1))
    }
    const handleRightClick = () => {
        setQuantity((prev) => (prev + 1))
    }

    return(
        <div className="flex flex-col px-5">
            <h2 className="text-lg">{name}</h2>
            <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold">R$ {totalPrice.toFixed(2)}</h1>
                {discountPercentage > 0 && (
                    <DiscountBadge>
                        {discountPercentage}%
                    </DiscountBadge>
                )}
            </div>
            {discountPercentage > 0 && (
                <p className="opacity-75 text-sm line-through">R$ {Number(basePrice).toFixed(2)}</p>
            )}

            <div className="flex items-center gap-2 mt-4">
                <Button size='icon' variant='outline' onClick={handleLeftClick}>
                    <ArrowLeftIcon size={16}/>
                </Button>
                <span>{quantity}</span>
                <Button size='icon' variant='outline' onClick={handleRightClick}>
                    <ArrowRightIcon size={16}/>
                </Button>
            </div>

            <div className="flex flex-col gap-3 mt-8">
                <h3 className="font-semibold">Descrição</h3>
                <p className="opacity-60 text-sm text-justify">{description}</p>
            </div>

            <Button className="mt-8 font-bold uppercase">
                Adicionar ao carrinho
            </Button>

            <div className="bg-accent flex items-center px-5 py-2 justify-between mt-5 rounded-lg">

                <div className="flex items-center gap-2">
                    <TruckIcon/>
                    <div>
                        <p className="text-xs">Entrega via <span className="font-bold">FSPacket®</span> </p>
                        <p className=" text-xs text-[#8162FF]">
                            Envio para 
                            <span className="font-bold"> todo o Brasil</span> 
                        </p>
                    </div>
                </div>
                <p className="text-xs font-bold">Frete Grátis</p>
                
                <div>

                </div>
            </div>
        </div>
    )
}

export default ProductInfo;