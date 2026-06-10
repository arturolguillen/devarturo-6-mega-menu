import Link from "next/link";

export default function ProductBanner() {
    return (
        <div className="col-span-2 h-48 bg-zinc-900 rounded-2xl p-8 flex items-center justify-between group overflow-hidden relative">
            <div className="z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{'Venta Flash Activa'}</h3>
                <p className="text-zinc-400 mb-4">{'Hasta 40% de descuento en abrigos seleccionados.'}</p>
                <Link href={'#'} className="text-white font-bold underline underline-offset-4 decoration-2">{'Ver Ofertas'}</Link>
            </div>
        </div>
    );
}