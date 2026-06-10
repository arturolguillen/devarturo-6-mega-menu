export default function Main({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex-1 pt-16">
            {children}
        </main>
    );
}