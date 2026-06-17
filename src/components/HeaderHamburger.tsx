"use client";

import { useNavigation } from "@/components/NavigationContext";

export default function HeaderHamburger() {
    const { isOpen, toggleMenu } = useNavigation();

    return (
        <button
            type="button"
            aria-label={'Abrir Menú'}
            aria-expanded={isOpen}
            onClick={toggleMenu}
            className={`flex items-center justify-center size-10 text-zinc-900 focus:outline-none z-110 ${isOpen ? "is-open" : ""}`}
        >
            <div className="relative w-6 h-4 flex flex-col justify-between">
                {[0, 1, 2].map(i => (
                    <span
                        key={i}
                        className={`hamburger-line line-${++i} block w-full h-0.5 bg-current rounded-full`}
                    ></span>
                ))}
            </div>
        </button>
    );
}