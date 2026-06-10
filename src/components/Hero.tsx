export default function Hero({ children }: {
    children: React.ReactNode;
}) {
    return (
        <section className="relative min-h-[80vh] flex items-center bg-[#fcf8fa] pt-8 xl:pt-16">
            <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {children}
            </div>
        </section>
    );
}