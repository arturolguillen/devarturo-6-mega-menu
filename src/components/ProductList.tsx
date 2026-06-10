import ZapatillaTechMeshImage from "@/images/zapatilla-tech-mesh.png";
import CapsulaDeFinDeSemanaImage from "@/images/capsula-de-fin-de-semana.png";
import Image from "next/image";

const products = [
    {
        id: 1,
        name: 'Zapatilla Tech-Mesh',
        price: '$180',
        image: ZapatillaTechMeshImage,
    },
    {
        id: 2,
        name: 'Cápsula de Fin de Semana',
        price: '$240',
        image: CapsulaDeFinDeSemanaImage,
    },
];

export default function ProductList() {
    return (
        <>
            {products.map(product => (
                <div
                    key={product.id}
                    className="group"
                >
                    <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-100 mb-4">
                        <Image
                            alt={product.name}
                            src={product.image}
                            className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <h3 className="font-bold text-zinc-900">{product.name}</h3>
                    <p className="text-zinc-900 font-bold">{product.price}</p>
                </div>
            ))}
        </>
    );
}