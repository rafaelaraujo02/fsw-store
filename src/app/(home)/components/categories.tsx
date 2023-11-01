import { prismaClient } from "@/lib/prisma"
import Category from "./category-item"

const Categories = async () => {

    const categories = await prismaClient.category.findMany({})

    return(
        <div className="grid grid-cols-2 gap-y-2 gap-x-4">
            {categories.map((category) => (
                <Category key={category.id} category={category}/>
            ))}
        </div>
    );
};

export default Categories;