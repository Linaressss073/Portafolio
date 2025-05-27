export default function Home() {
    return (
        <div className="relative px-4 sm:px-6 lg:px-8">
            <main className="mt-12 text-center p-4 sm:p-6 md:p-12 rounded-3xl mx-auto max-w-7xl
                bg-white/80 backdrop-blur-sm text-gray-800 
                dark:bg-gray-900/80 dark:text-gray-100 
                shadow-2xl border border-white/20 dark:border-gray-700/50
                transition-all duration-500 ease-in-out
                hover:shadow-3xl hover:bg-white/90 dark:hover:bg-gray-900/90">

                {/* Título y nombre */}
                <div className="p-4 sm:p-6 md:p-8 transform transition-all duration-500 hover:scale-[1.02]">
                    <section className="p-6 sm:p-8 md:p-10 bg-gradient-to-r from-gray-50/80 via-blue-50/60 to-indigo-50/80 
                                     dark:from-gray-800/80 dark:via-gray-700/60 dark:to-indigo-800/80 
                                     rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-600/50
                                     mb-12 sm:mb-16 backdrop-blur-sm
                                     transition-all duration-500 ease-in-out
                                     hover:shadow-xl hover:scale-[1.01]
                                     hover:bg-gradient-to-r hover:from-blue-50/90 hover:via-indigo-50/70 hover:to-purple-50/90
                                     dark:hover:from-gray-700/90 dark:hover:via-indigo-800/70 dark:hover:to-blue-800/90">
                        
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text 
                                     bg-gradient-to-r from-blue-600 via-purple-500-600 to-indigo-600
                                     dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 
                                     font-bold leading-tight
                                     transition-all duration-500 ease-in-out
                                     hover:scale-105 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700
                                     dark:hover:from-blue-300 dark:hover:via-purple-300 dark:hover:to-indigo-300
                                     animate-pulse">
                            Desarrollador Full Stack
                        </h1>
                        
                        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-blue-500 dark:text-blue-300 
                                     mt-4 font-semibold
                                     transition-all duration-500 ease-in-out
                                     hover:text-blue-600 dark:hover:text-blue-200
                                     hover:scale-105">
                            Deivy Alejandro Rojas Linares
                        </h2>
                        
                        <div className="mt-6 p-4 sm:p-6 bg-white/60 dark:bg-gray-800/60 rounded-xl 
                                      border border-gray-200/30 dark:border-gray-600/30
                                      transition-all duration-500 ease-in-out
                                      hover:bg-white/80 dark:hover:bg-gray-800/80
                                      hover:shadow-md">
                            <h4 className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 
                                         font-medium leading-relaxed
                                         transition-colors duration-500 ease-in-out">
                                Comprometido con la innovación y el aprendizaje continuo del desarrollo web
                            </h4>
                        </div>
                    </section>
                </div>

                {/* Párrafos y explicación */}
                <div className="mt-4 sm:mt-6 space-y-6 max-w-4xl mx-auto text-base sm:text-lg md:text-xl 
                              transform transition-all duration-500 hover:scale-[1.02]">
                    
                    <div className="p-4 sm:p-6 bg-gradient-to-r from-white/70 to-blue-50/70 
                                  dark:from-gray-800/70 dark:to-indigo-800/70 
                                  rounded-2xl shadow-lg border border-gray-200/40 dark:border-gray-600/40
                                  backdrop-blur-sm
                                  transition-all duration-500 ease-in-out
                                  hover:shadow-xl hover:from-white/90 hover:to-blue-50/90
                                  dark:hover:from-gray-800/90 dark:hover:to-indigo-800/90
                                  hover:scale-[1.02]">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Hola, soy estudiante y desarrollador Full Stack
                            especializado en crear aplicaciones web
                            modernas con <span className="font-semibold text-blue-600 dark:text-blue-400">Next.js, Express, Nest.js y TailwindCSS</span>.
                        </p>
                    </div>
                    
                    <div className="p-4 sm:p-6 bg-gradient-to-r from-indigo-50/70 to-purple-50/70 
                                  dark:from-indigo-800/70 dark:to-purple-800/70 
                                  rounded-2xl shadow-lg border border-gray-200/40 dark:border-gray-600/40
                                  backdrop-blur-sm
                                  transition-all duration-500 ease-in-out
                                  hover:shadow-xl hover:from-indigo-50/90 hover:to-purple-50/90
                                  dark:hover:from-indigo-800/90 dark:hover:to-purple-800/90
                                  hover:scale-[1.02]">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Busco mi primera oportunidad para aplicar todo lo que he aprendido
                            y contribuir a <span className="font-semibold text-purple-600 dark:text-purple-400">proyectos innovadores</span>.
                        </p>
                    </div>
                </div>

                {/* Elementos decorativos animados */}
                <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-14 sm:w-20 h-14 sm:h-20 
                              bg-blue-200/30 dark:bg-blue-800/30 rounded-full blur-xl animate-pulse 
                              transition-colors duration-700"></div>
                <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 
                              bg-purple-200/30 dark:bg-purple-800/30 rounded-full blur-xl animate-pulse delay-1000
                              transition-colors duration-700"></div>
                <div className="absolute top-1/2 left-2 sm:left-5 w-12 sm:w-16 h-12 sm:h-16 
                              bg-indigo-200/30 dark:bg-indigo-800/30 rounded-full blur-xl animate-pulse delay-500
                              transition-colors duration-700"></div>
            </main>
        </div>
    );
}
