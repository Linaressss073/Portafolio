import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/app/Navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio personal de Alejandro Rojas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`
          ${outfit.className} 
          bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 
          dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 
          transition-all duration-700 ease-in-out
          text-black dark:text-white min-h-screen
        `}
      >
        <Navbar />
        <main
          className="p-4 md:p-8 max-w-7xl mx-auto"
        >
          {children}
        </main>

        {/* Elementos decorativos animados globales */}
        <div className="pointer-events-none fixed top-20 left-10 w-20 h-20 bg-blue-200/30 dark:bg-blue-800/30 
                      rounded-full blur-xl animate-pulse transition-colors duration-700"></div>
        <div className="pointer-events-none fixed bottom-20 right-10 w-32 h-32 bg-purple-200/30 dark:bg-purple-800/30 
                      rounded-full blur-xl animate-pulse delay-1000 transition-colors duration-700"></div>
        <div className="pointer-events-none fixed top-1/2 left-5 w-16 h-16 bg-indigo-200/30 dark:bg-indigo-800/30 
                      rounded-full blur-xl animate-pulse delay-500 transition-colors duration-700"></div>
      </body>
    </html>
  );
}
