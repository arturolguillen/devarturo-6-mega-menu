export default function Header({ children }: {
    children: React.ReactNode;
}) {
    return (
        <header className="fixed top-0 left-0 w-full z-100 h-16 bg-white border-b border-zinc-100 transition-colors duration-300">
            <nav className="container h-full flex items-center justify-between relative">
                {children}
            </nav>
        </header>
    );
}