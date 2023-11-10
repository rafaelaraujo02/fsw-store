import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
    product: ProductWithTotalPrice
}
// 1:46

const ProductItem = ({product}: ProductItemProps) => {
    return (
        <div className="flex flex-col gap-2 max-w-[170px]">
            {/* IMAGEM */}
            <div className="relative bg-accent rounded-lg h-[170px] w-[170px] flex items-center justify-center">
                {/* sempre que quiser utilizar medidas dinamicas, 
                coloca height e width 0, o sizes 100vw 
                e estiliza pelo className

                o style aqui é uma configuração para não perder o aspect ratio das imagens
                */}
                <Image 
                    src={product.imageUrls[0]}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto w-auto max-w-[80%] max-h-[70%]"
                    style={{
                        objectFit: "contain"
                    }}
                    alt={product.name}
                />

                {/* Badge que só será exibida se existir um desconto */}
                {product.discountPercentage > 0 && (
                    <Badge className="absolute left-3 top-2 px-2 py-[2px]">
                        <ArrowDownIcon size={14}/>
                        {product.discountPercentage}%
                    </Badge>
                )}
            </div>

            {/* */}
            <div>
                <p className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                    {product.name}
                </p>
            </div>

            <div className="flex items-center gap-2">
                {product.discountPercentage > 0 ? (
                    <>
                        <p className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                            R$ {product.totalPrice.toFixed(2)}
                        </p>
                        
                        <p className="line-through opacity-75 text-xs overflow-hidden text-ellipsis whitespace-nowrap">
                            R$ {Number(product.basePrice).toFixed(2)}
                        </p>
                    </>
                ) : (
                    <p className="font-semibold text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                        R$ {product.basePrice.toFixed(2)}
                    </p>
                )}
                
                
            </div>
        </div>
    )
}

export default ProductItem;