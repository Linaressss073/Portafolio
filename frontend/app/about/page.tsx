"use client"

export default function About() {
    return (
        <div>
            <main className=" text-center p-4 sm:p-6 md:p-12 rounded-3xl mx-auto max-w-7xl
            bg-white/80 backdrop-blur-sm text-gray-800
            dark:bg-gray-900/80 dark:text-gray-100
            shadow-2xl border-white/20 dark:border-gray-700/50
            transition-all duration-500 ease-in-out 
            hover:shadow-3xl hover:bg-white/90 dark:hover:bg-gray-900/90">

                {/* Acerca de mi */}
                <div className="p-4 sm:p-6 md:p-8 transform transition-all duration-500 hover:scale-[1.02]">
                    <section className="sm:p-8 md:p-10 bg-gradient-to-r from-gray-50/80 via-blue-50/60 to-indigo-50/80 
                                     dark:from-gray-800/80 dark:via-gray-700/60 dark:to-indigo-800/80 
                                     rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-600/50
                                     mb-8 sm:mb-16 backdrop-blur-sm
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
                            Sobre Mí
                        </h1>

                        <p className="text-xl sm:text-2xl md:text-4xl lg:text-2xl text-blue-500 dark:text-blue-300 
                                     font-semibold
                                     transition-all duration-500 ease-in-out
                                     hover:text-blue-600 dark:hover:text-blue-200
                                     hover:scale-105">
                            ¡Hola! Soy un entusiasta y autodidacta desarrollador Full Stack. Mi pasión por la tecnología me ha llevado a sumergirme de lleno en el mundo del desarrollo web, donde disfruto construyendo soluciones funcionales y atractivas desde cero.
                            Aunque no tengo experiencia laboral formal, he dedicado 5 años a aprender y aplicar mis conocimientos en proyectos personales y academicos desafiantes.
                            Me encanta la versatilidad de trabajar tanto en el lado del cliente como en el del servidor.
                        </p>

                    </section>
                </div>

                <div className="px-8 sm:px-10 sm:pt-10 sm:pb-0 font-semibold">
                    <p className="text-2xl tracking-tight max-lg:text-center mb-12 text-gray-800 dark:text-gray-200
                        transition-all duration-300 ease-in-out
                        hover:scale-105 hover:shadow-xl hover:z-10 rounded-4xl">
                        Aquí te presento las tecnologías y herramientas con las que construyo mis proyectos, organizadas para una visión clara de mi stack Full-Stack:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Frontend Cell */}
                        <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out
                      hover:scale-105 hover:shadow-xl hover:z-10
                      dark:bg-gray-700 dark:shadow-xl dark:hover:shadow-2xl dark:hover:scale-105">
                            <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-300">Desarrollo Frontend</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-200">
                                <li>
                                    Next.js: Dominio en la creación de interfaces de usuario dinámicas con React, aprovechando el renderizado del lado del servidor (SSR) para optimizar rendimiento y SEO.
                                </li>
                                <li>
                                    Astro: Experiencia en la creación de sitios web rápidos y modernos con un enfoque en la arquitectura de islas, permitiendo una gran performance y flexibilidad en la integración de diferentes frameworks UI.
                                </li>
                                <li>
                                    Tailwind CSS: Experiencia en el uso de estilos con el framework para mejorar visibilidad y diseño responsivo, acelerando el desarrollo de UI.
                                </li>
                            </ul>
                        </div>

                        {/* Backend Cell */}
                        <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out
                      hover:scale-105 hover:shadow-xl hover:z-10
                      dark:bg-gray-700 dark:shadow-xl dark:hover:shadow-2xl dark:hover:scale-105">
                            <h3 className="text-xl font-bold mb-3 text-green-600 dark:text-green-300">Desarrollo Backend</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-200">
                                <li>
                                    Node.js: Habilidad para construir APIs RESTful y aplicaciones backend escalables.
                                </li>
                                <li>
                                    NestJS: Experiencia en el desarrollo de aplicaciones backend robustas y bien estructuradas, utilizando TypeScript y principios de arquitectura modular.
                                </li>
                                <li>
                                    Express.js: Conocimiento en la creación de servidores web ligeros y eficientes para soluciones backend flexibles.
                                </li>
                            </ul>
                        </div>

                        {/* Databases Cell */}
                        <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out
                      hover:scale-105 hover:shadow-xl hover:z-10
                      dark:bg-gray-700 dark:shadow-xl dark:hover:shadow-2xl dark:hover:scale-105">
                            <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-300">Bases de Datos</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-200">
                                <li>
                                    PostgreSQL: Experiencia en bases de datos relacionales, diseño de esquemas y consultas complejas.
                                </li>
                                <li>
                                    MongoDB: Familiaridad con bases de datos NoSQL para soluciones flexibles y escalables.
                                </li>
                                <li>
                                    SQLite3: Conocimiento para bases de datos embebidas y prototipado rápido.
                                </li>
                            </ul>
                        </div>

                        {/* DevOps & Containers Cell */}
                        <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out
                      hover:scale-105 hover:shadow-xl hover:z-10
                      dark:bg-gray-700 dark:shadow-xl dark:hover:shadow-2xl dark:hover:scale-105">
                            <h3 className="text-xl font-bold mb-3 text-red-600 dark:text-red-300">DevOps y Contenedores</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-200">
                                <li>
                                    Docker: Familiaridad con la contenerización de aplicaciones, lo que permite entornos de desarrollo y despliegue consistentes y portables.
                                </li>
                                <li>
                                    Vercel: Experiencia en el despliegue rápido y eficiente de aplicaciones Next.js y Astro.
                                </li>
                            </ul>
                        </div>

                        {/* Tools & Methodologies Cell */}
                        <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out
                      hover:scale-105 hover:shadow-xl hover:z-10
                      dark:bg-gray-700 dark:shadow-xl dark:hover:shadow-2xl dark:hover:scale-105">
                            <h3 className="text-xl font-bold mb-3 text-yellow-600 dark:text-yellow-300">Herramientas y Metodologías</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-200">
                                <li>
                                    Git/GitHub: Uso regular para control de versiones, colaboración en proyectos y gestión de repositorios.
                                </li>
                                <li>
                                    Metodologías Ágiles: Familiaridad con principios de trabajo como Scrum/Kanban para una gestión de proyectos eficiente.
                                </li>
                            </ul>
                        </div>

                        {/* Testing Cell */}
                        <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out
                      hover:scale-105 hover:shadow-xl hover:z-10
                      dark:bg-gray-700 dark:shadow-xl dark:hover:shadow-2xl dark:hover:scale-105">
                            <h3 className="text-xl font-bold mb-3 text-pink-600 dark:text-pink-300">Testing y Calidad de Código</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-200">
                                <li>
                                    Jest: Experiencia en la escritura de tests unitarios y de integración para asegurar la robustez y funcionalidad del código JavaScript/TypeScript.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}