import HeroImage from "@/images/hero-image.png";
import Image from "next/image";

export default function HeroFigure() {
    return (
        <div className="lg:col-span-6 relative">
            <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                    alt={'Interior de Stratos'}
                    src={HeroImage}
                    className="size-full object-cover object-center"
                    loading="eager"
                />
            </div>
        </div>
    );
}