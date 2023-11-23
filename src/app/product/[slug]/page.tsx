import { prismaClient } from "@/lib/prisma"
import ProductImages from "./components/product-image"
import ProductInfo from "./components/product-info"
import { computeProductTotalPrice } from "@/helpers/product"
import ProductList from "@/components/ui/product-list"
import SectionTitle from "@/components/ui/section-title"

interface ProductDetailPageProps {
    params: {
        slug: string
    }
}

const ProductDetailPage = async ({params: { slug }}: ProductDetailPageProps) => {
    
    const product = await prismaClient.product.findFirst({
        where: {
            slug: slug
        },
        include: {
            category: {
                include: {
                    products: {
                        where: {
                            slug: {
                                not: slug //Pega todos os mouses menos o mouse que está sendo exibido 58:58
                            }
                        }
                    },
                }
            }
        }
    })

    if(!product) return null;
    
    return(
        <div className="flex flex-col gap-8 pb-8">
            <ProductImages imageUrls={product.imageUrls} name={product.name}/>
            
            <ProductInfo product={computeProductTotalPrice(product)}/>

            <div>
                <SectionTitle>Produtos Recomendados</SectionTitle>
                <ProductList products={product.category.products}/>
            </div>
        </div>
    )
}

export default ProductDetailPage;