import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
    product: Product
}

const ProductItem = ({product}: ProductItemProps) => {
    return (
        <div className="flex flex-col gap-4">
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

            {/* TEXTO 1:04*/}
            <div>

            </div>
        </div>
    )
}

export default ProductItem;