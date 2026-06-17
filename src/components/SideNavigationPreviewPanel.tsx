import Link from "next/link";
import MegaMenuCoverImage from "@/images/mega-menu-cover.png";
import Image from "next/image";

export default function SideNavigationPreviewPanel() {
    return (
        <div className="hidden lg:flex flex-1 relative bg-zinc-50 overflow-hidden">
            <Image
                src={MegaMenuCoverImage}
                alt={'Editorial de Moda'}
                className="absolute inset-0 w-full h-full object-cover object-top"
                loading="eager"
            />
            <div className="absolute inset-0 bg-linear-to-r from-white via-transparent to-transparent"></div>
            <div className="relative z-10 p-24 flex flex-col justify-center max-w-lg">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-4">{'Invierno \'26'}</span>
                <h3 className="text-5xl font-bold text-zinc-900 leading-tight mb-8">{'Minimalismo Arquitectónico'}</h3>
                <Link href={'#'} className="inline-flex h-12 items-center px-8 bg-zinc-900 text-white font-bold rounded-lg hover:bg-zinc-800 transition-colors self-start">{'Explorar Ahora'}</Link>
            </div>
        </div>
    );
}