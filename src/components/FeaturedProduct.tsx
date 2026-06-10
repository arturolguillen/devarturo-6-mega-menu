import FeaturedProductImage from "@/images/featured-product-image.png";
import Image from "next/image";

export default function FeaturedProduct() {
    return (
        <div className="col-span-2 row-span-2 group">
            <div className="aspect-4/5 lg:aspect-auto lg:h-150 rounded-2xl overflow-hidden bg-zinc-100 mb-6">
                <Image
                    alt={'Blazer Stratos Signature'}
                    src={FeaturedProductImage}
                    className="size-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
            </div>
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-1">{'Blazer Stratos Signature'}</h3>
                    <p className="text-zinc-500 mb-4">{'Mezcla de lana italian, precisión de sastre.'}</p>
                    <div className="flex gap-2">
                        {['Más vendido', 'Limitado'].map(item => (
                            <span
                                key={item}
                                className="px-3 py-1 bg-white border border-zinc-100 rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-400"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
                <span className="text-xl font-bold">{'$495'}</span>
            </div>
        </div>
    );
}