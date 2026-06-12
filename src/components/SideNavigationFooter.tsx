import Link from "next/link";

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

export default function SideNavigationFooter() {
    const date = new Date;

    return (
        <div className="mt-auto py-12 flex flex-col gap-4 border-t border-zinc-100">
            <div className="flex gap-6">
                {socialMediaLinks.map(item => (
                    <Link
                        key={item.id}
                        href={'#'}
                        className="nav-item-stagger text-sm font-semibold text-zinc-400 hover:text-zinc-900 transition-colors"
                    >
                        {item.text}
                    </Link>
                ))}
            </div>
            <p className="nav-item-stagger text-xs text-zinc-400">
                &copy; {`${date.getFullYear()} Ecosistema de Marca Stratos.`}
            </p>
        </div>
    );
}