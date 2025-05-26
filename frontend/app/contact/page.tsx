"use client";

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';

import GridBox from "@/components/ui/GridBox"; // Ajusta si está en otra ruta
import Link from 'next/link';

export default function Contact() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-6 gap-4 text-center p-6 md:p-14 items-center">
            {/* Título */}
            <div className="col-span-1 md:col-span-4 md:col-start-2 text-4xl md:text-5xl font-bold text-blue-700 dark:text-blue-400 p-4 md:p-8">
                Contacto
            </div>

            {/* Github */}
            <GridBox className="md:col-start-1 md:col-end-4">
                <section className="p-6 md:p-8 text-xl md:text-2xl">
                    <Link
                        href="https://github.com/Linaressss073"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <FaGithub className='text-4xl' />
                        <span className='mt-2 text-base md:text-lg'>Ir a GitHub</span>
                    </Link>
                </section>
            </GridBox>

            {/* LinkedIn */}
            <GridBox className="md:col-start-4 md:col-end-7">
                <section className="p-6 md:p-8 text-xl md:text-2xl">
                    <Link
                        href="https://www.linkedin.com/in/deivy-rojas-linares-b506b1278/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <FaLinkedin className='text-4xl' />
                        <span className='mt-2 text-base md:text-lg'>Ir a LinkedIn</span>
                    </Link>
                </section>
            </GridBox>

            {/* Gmail */}
            <GridBox className="md:col-start-1 md:col-end-7">
                <section className="p-6 md:p-8 text-xl md:text-2xl">
                    <Link
                        href="mailto:drojasl3@ucentral.edu.co?subject=Contacto&body=Hola,%20me%20gustaría%20contactarte.%20Estos%20son%20mis%20datos%20de%20contacto..."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <CiMail className='text-4xl' />
                        <span className='mt-2 text-base md:text-lg'>Enviar correo</span>
                    </Link>
                </section>
            </GridBox>
        </main>
    );
}
