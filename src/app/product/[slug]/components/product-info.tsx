import { Badge } from "@/components/ui/badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import { ArrowDown } from "lucide-react";

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

const ProductInfo = ({ product: { basePrice, description, discountPercentage, totalPrice, name } }: ProductInfoProps) => {
    return(
        <div className="flex flex-col px-5">
            <h2 className="text-lg">{name}</h2>
            <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold">R$ {totalPrice.toFixed(2)}</h1>
                {discountPercentage > 0 && (
                    <Badge className="px-2 py-[2px]">
                        <ArrowDown size={14}/> {discountPercentage}%
                    </Badge>
                )}
            </div>
            {discountPercentage > 0 && (
                <p className="opacity-75 text-sm line-through">R$ {basePrice.toFixed(2)}</p>
            )}
        </div>
    )
}

export default ProductInfo;