import FeaturedProductImage from "@/images/featured-product-image.png";
import Image from "next/image";

export default function FeaturedProduct() {
    return (
        <div>
            <div>
                <Image
                    alt=""
                    src={FeaturedProductImage}
                />
            </div>
            <div>
                <div>
                    <h3>{'Blazer Stratos Signature'}</h3>
                    <p>{'Mezcla de lana italian, precisión de sastre.'}</p>
                    <div>
                        <span>{'Más vendido'}</span>
                        <span>{'Limitado'}</span>
                    </div>
                </div>
                <span>{'$495'}</span>
            </div>
        </div>
    );
}