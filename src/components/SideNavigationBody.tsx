export default function SideNavigationBody({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full lg:w-120 h-full flex flex-col pt-32 px-8 md:px-16 overflow-y-auto border-r border-zinc-100">
            {children}
        </div>
    );
}