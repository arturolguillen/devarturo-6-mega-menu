import { ChevronDown } from "lucide-react";
import Link from "next/link";

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

export default function SideNavigationMenu() {
    return (
        <nav>
            <Link href={'#'}>
                <span>{menuItems[0].text}</span>
            </Link>
            <div>
                <button type="button">
                    <span>{'Categorías'}</span>
                    <ChevronDown />
                </button>
                <div>
                    {categoryMenuItems.map(item => (
                        <Link
                            key={item.id}
                            href={'#'}
                        >
                            {item.text}
                        </Link>
                    ))}
                </div>
                {menuItems.slice(-2).map(item => (
                    <Link
                        key={item.id}
                        href={'#'}
                    >
                        <span>{item.text}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}