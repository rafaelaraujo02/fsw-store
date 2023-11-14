import { Category } from "@prisma/client"
import Image from "next/image"

interface CategoryItemProps {
    category: Category
}

const CategoryItem = ({category}: CategoryItemProps) => {
    return(
        <div className="flex flex-col">
            {/* Image */}
            <div className="w-full h-[150px] rounded-tl-lg rounded-tr-lg flex items-center justify-center bg-category-item-gradient">
                <Image
                    src={category.imageUrl}
                    alt={category.name}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto max-h-[70%] w-auto max-w-[80%]"
                    style={{
                        objectFit: "contain"
                    }}
                />
            </div>

            {/* Title */}
            <div className="bg-accent py-3 rounded-br-lg rounded-bl-lg">
                <p className="text-sm font-semibold text-center">{category.name}</p>
            </div>
        </div>
    )
}

export default CategoryItem