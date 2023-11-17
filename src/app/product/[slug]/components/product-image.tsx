'use client';

import Image from "next/image"
import { useState } from "react"

interface ProductImagesProps {
    imageUrls: string[],
    name: string
}

const ProductImages = ({imageUrls, name}: ProductImagesProps) => {

    const [currentImage, setCurrentImage] = useState(imageUrls[0])

    const handleClick = (image: string) => {
        setCurrentImage(image)
    }

    return(
        <div className="flex flex-col">
            <div className="bg-accent h-[380px] w-full items-center flex justify-center">
                <Image 
                    src={currentImage} 
                    alt={name} 
                    height={0} 
                    width={0} 
                    sizes="100vw"
                    className="h-auto max-h-[70%] w-auto max-w-[80%]"
                    style={{ objectFit: 'contain' }}
                />
            </div>

            {/* BOTÕES COM AS OUTRAS IMAGENS */}
            <div className="grid grid-cols-4 gap-4 mt-8 px-5">
                {imageUrls.map(imageUrl => (
                    <button 
                        key={imageUrl} 
                        className={`bg-accent flex items-center justify-center rounded-lg h-[100px]
                            ${imageUrl === currentImage && "border-2 border-solid border-primary"}
                        `}
                        onClick={() => handleClick(imageUrl)}
                        >

                        <Image
                            src={imageUrl}
                            alt={name}
                            height={0}
                            width={0}
                            sizes="100vw"
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ProductImages