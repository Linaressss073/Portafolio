"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { useDarkMode } from "@/hooks/useDarkMode"
import { NavigationLinks } from "@/components/constants/navigation"

export default function Navbar() {
    const [isMounted, setIsMounted] = useState(false);
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    const pathname = usePathname();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <nav className="max-w-7xl mt-6 text-center p-6 md:p-12 rounded-3xl mx-auto
                bg-white/80 backdrop-blur-sm text-gray-800 
                dark:bg-gray-900/80 dark:text-gray-100 
                shadow-2xl border border-white/20 dark:border-gray-700/50
                transition-all duration-500 ease-in-out
                hover:shadow-3xl hover:bg-white/90 dark:hover:bg-gray-900/90">
            <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-8 py-6 px-4
                           bg-white/60 dark:bg-gray-800/60 rounded-2xl shadow-lg border
                           border-gray-200/30 dark:border-gray-600/30
                           backdrop-blur-sm transition-all duration-500 ease-in-out
                           hover:shadow-xl hover:bg-white/70 dark:hover:bg-gray-800/70">
                {NavigationLinks.map((link) => (
                    <li key={link.id}>
                        <Link
                            href={link.href}
                            className={`
                                relative px-4 py-2 text-base md:text-lg font-semibold rounded-lg
                                transition-all duration-300 ease-in-out transform
                                ${pathname === link.href
                                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg scale-105'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-md'}
                                after:absolute after:left-0 after:bottom-[-6px] after:h-[2px]
                                after:bg-gradient-to-r after:from-blue-500 after:to-purple-500
                                after:transition-all after:duration-300 after:ease-in-out
                                ${pathname === link.href ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                            `}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
                <li>
                    <button
                        onClick={toggleDarkMode}
                        className="relative flex items-center justify-center
                                   bg-gradient-to-r from-gray-200 to-gray-300
                                   dark:from-gray-700 dark:to-gray-600
                                   hover:from-blue-200 hover:to-purple-200
                                   dark:hover:from-blue-800 dark:hover:to-purple-800
                                   p-3 rounded-xl shadow-lg border border-gray-300/50 dark:border-gray-600/50
                                   transition-all duration-300 ease-in-out transform
                                   hover:scale-110 hover:shadow-xl active:scale-95 overflow-hidden" // Added overflow-hidden
                        aria-label="Toggle Dark Mode"
                        suppressHydrationWarning
                    >
                        <span className="text-xl z-10"> {/* Added z-10 */}
                            {isMounted ? (isDarkMode ? '🌙' : '☀️') : '🌙'}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                                    -translate-x-full transition-transform duration-700 hover:translate-x-full pointer-events-none" />
                    </button>
                </li>
            </ul>
        </nav>
    );
}