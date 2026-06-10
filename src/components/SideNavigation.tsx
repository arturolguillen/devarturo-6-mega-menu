export default function SideNavigation({ children }: {
    children: React.ReactNode;
}) {
    return (
        <aside className="fixed inset-0 z-90 bg-white -translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden">
            <div className="flex h-full">
                {children}
            </div>
        </aside>
    );
}