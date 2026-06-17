"use client";

import { createContext, useContext, useEffect, useState } from "react";

type NavigationContextValue = {
    isOpen: boolean;
    toggleMenu: () => void;
    setIsOpen: (isOpen: boolean) => void;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

export default function NavigationProvider({ children }: {
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(currentIsOpen => !currentIsOpen);
    };

    return (
        <NavigationContext.Provider value={{ isOpen, toggleMenu, setIsOpen }}>
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigation() {
    const context = useContext(NavigationContext);

    if (!context) {
        throw new Error("useNavigation must be used within a NavigationProvider");
    }

    return context;
}