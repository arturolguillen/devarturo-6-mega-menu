import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProductsHeading() {
    return (
        <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold text-zinc-900">{'Lanzamientos Destacados'}</h2>
                <p className="text-zinc-500">{'Cantidades limitadas disponibles'}</p>
            </div>
            <Link href={'#'} className="flex items-center gap-2 text-zinc-900 font-bold group">
                {'Ver todo'}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    );
}