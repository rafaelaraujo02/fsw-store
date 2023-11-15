import { prismaClient } from "@/lib/prisma"

interface ProductDetailPageProps {
    params: {
        slug: string
    }
}

const ProductDetailPage = async ({params: { slug }}: ProductDetailPageProps) => {
    
    const product = await prismaClient.product.findFirst({
        where: {
            slug: slug
        }
    })

    if(!product) return null;
    
    return(
        <div>
            <p>{product.name}</p>
        </div>
    )
}

export default ProductDetailPage;