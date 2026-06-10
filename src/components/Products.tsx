export default function Products({ children }: {
    children: React.ReactNode;
}) {
    return (
        <section className="py-24 container">
            {children}
        </section>
    );
}