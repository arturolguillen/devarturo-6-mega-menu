"use client";

import { useNavigation } from "@/components/NavigationContext";

export default function SideNavigation({ children }: {
    children: React.ReactNode;
}) {
    const { isOpen } = useNavigation();

    return (
        <aside className={`fixed inset-0 z-90 bg-white transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${isOpen ? "is-open-menu translate-x-0" : "-translate-x-full"}`}>
            <div className="flex h-full">
                {children}
            </div>
        </aside>
    );
}