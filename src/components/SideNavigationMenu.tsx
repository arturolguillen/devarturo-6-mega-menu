import { ChevronDown } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";

const menuItems = [
    {
        id: 1,
        text: 'Novedades',
    },
    {
        id: 2,
        text: 'Nuestra Historia'
    },
    {
        id: 3,
        text: 'Soporte'
    },
];

const categoryMenuItems = [
    {
        id: 1,
        text: 'Moda Hombre',
    },
    {
        id: 2,
        text: 'Moda Mujer',
    },
    {
        id: 3,
        text: 'Accesorios',
    },
    {
        id: 4,
        text: 'Edición Limitada',
    },
];

const menuItemClassnames = 'group flex items-baseline gap-4';
const menuItemInnerClassnames = 'text-3xl md:text-4xl font-bold tracking-tight group-hover:translate-x-2 transition-transform';

function staggerDelay(delayMs: number): CSSProperties {
    return {
        "--nav-stagger-delay": `${delayMs}ms`,
    } as CSSProperties;
}

export default function SideNavigationMenu() {
    return (
        <nav className="flex flex-col gap-8">
            <Link href={'#'} className={`nav-item-stagger ${menuItemClassnames}`} style={staggerDelay(0)}>
                <span className={`${menuItemInnerClassnames}`}>{menuItems[0].text}</span>
            </Link>
            <div className="nav-item-stagger group" style={staggerDelay(60)}>
                <button type="button" className="flex items-baseline gap-4 w-full text-left" id="category-trigger">
                    <span className="text-3xl md:text-4xl font-bold tracking-tight group-hover:translate-x-2 transition-transform">{'Categorías'}</span>
                    <ChevronDown />
                </button>
                <div className="hidden flex-col gap-4 mt-6 ml-4 border-l-2 border-zinc-100 pl-6" id="category-list">
                    {categoryMenuItems.map(item => (
                        <Link
                            key={item.id}
                            href={'#'}
                            className="text-lg text-zinc-500 hover:text-zinc-900"
                        >
                            {item.text}
                        </Link>
                    ))}
                </div>
            </div>
            {menuItems.slice(-2).map(item => (
                <Link
                    key={item.id}
                    href={'#'}
                    className={`nav-item-stagger ${menuItemClassnames}`}
                    style={staggerDelay(item.id === 2 ? 120 : 180)}
                >
                    <span className={`${menuItemInnerClassnames}`}>{item.text}</span>
                </Link>
            ))}
        </nav>
    );
}