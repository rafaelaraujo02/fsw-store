import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";

interface ProductItemProps {
    product: ProductWithTotalPrice
}

const ProductItem = ({product}: ProductItemProps) => {
    return (
        <div className="flex flex-col gap-4 max-w-[156px]">
            {/* IMAGEM */}
            <div className="bg-accent rounded-lg h-[170px] w-[156px] flex items-center justify-center">
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
            </div>

            {/* TEXTO 1:16*/}
            <div>
                <p className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                    {product.name}
                </p>
            </div>

            <div className="flex items-center gap-2">
                {product.discountPercentage > 0 ? (
                    <>
                        <p className="font-semibold text-sm">
                            R$ {product.totalPrice.toFixed(2)}
                        </p>
                        
                        <p className="line-through opacity-75 text-xs">
                            R$ {Number(product.basePrice).toFixed(2)}
                        </p>
                    </>
                ) : (
                    <p className="font-semibold text-sm">
                        R$ {product.basePrice.toFixed(2)}
                    </p>
                )}
                
                
            </div>
        </div>
    )
}

export default ProductItem;