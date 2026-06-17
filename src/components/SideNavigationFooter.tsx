import Link from "next/link";
import type { CSSProperties } from "react";

const socialMediaLinks = [
    {
        id: 1,
        text: 'Instagram',
    },
    {
        id: 2,
        text: 'Facebook',
    },
    {
        id: 3,
        text: 'X',
    },
];

function staggerDelay(delayMs: number): CSSProperties {
    return {
        "--nav-stagger-delay": `${delayMs}ms`,
    } as CSSProperties;
}

export default function SideNavigationFooter() {
    const date = new Date;

    return (
        <div className="mt-auto py-12 flex flex-col gap-4 border-t border-zinc-100">
            <div className="flex gap-6">
                {socialMediaLinks.map(item => (
                    <Link
                        key={item.id}
                        href={'#'}
                        className="nav-item-stagger text-sm font-semibold text-zinc-400 hover:text-zinc-900"
                        style={staggerDelay(240 + (item.id - 1) * 60)}
                    >
                        {item.text}
                    </Link>
                ))}
            </div>
            <p className="nav-item-stagger text-xs text-zinc-400" style={staggerDelay(420)}>
                &copy; {`${date.getFullYear()} Ecosistema de Marca Stratos.`}
            </p>
        </div>
    );
}