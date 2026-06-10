import { Search, ShoppingCart, User } from "lucide-react";

export default function HeaderIcons() {
    return (
        <div className="flex items-center gap-4">
            <button
                aria-label={'Buscar'}
                className="p-2 hover:bg-zinc-50 rounded-full transition-colors hidden sm:block"
            >
                <Search />
            </button>
            <button
                aria-label={'Carrito'}
                className="p-2 hover:bg-zinc-50 rounded-full transition-colors relative"
            >
                <ShoppingCart />
                <span className="absolute top-1 right-1 size-4 bg-zinc-900 text-[10px] flex items-center justify-center rounded-full text-white font-bold">{'2'}</span>
            </button>
            <button
                aria-label={'Perfil'}
                className="p-2 hover:bg-zinc-50 rounded-full transition-colors hidden sm:block"
            >
                <User />
            </button>
        </div>
    );
}