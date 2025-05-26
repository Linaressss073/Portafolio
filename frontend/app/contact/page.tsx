"use client";

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';

import GridBox from "@/components/ui/GridBox"; // Adjust the import path if your GridBox is in a different location
import Link from 'next/link';

export default function Contact() {
    return (
        <main className="grid grid-cols-6 gap-4 text-4xl text-center p-14 items-center">
            {/* Contact Title */}
            <div className="col-span-4 col-start-2 text-5xl font-bold text-blue-700 dark:text-blue-400 p-8">
                Contacto
            </div>

            {/* Github Link */}
            <GridBox className="col-start-1 col-end-4">
                <section className="p-8 text-2xl">
                    <Link
                        href="https://github.com/Linaressss073"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-white-800 hover:text-blue-600 transition-colors"
                    >
                        <FaGithub className='text-4xl' />
                        <span className='mt-2 text-lg'>Ir a github</span>
                    </Link>
                </section>
            </GridBox>

            {/* LinkedIn Link */}
            <GridBox className="col-start-4 col-end-7">
                <section className="p-8 text-2xl">
                    <Link
                        href="https://www.linkedin.com/in/deivy-rojas-linares-b506b1278/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-white-800 hover:text-blue-600 transition-colors"
                    >
                        <FaLinkedin className='text-4xl' />
                        <span className='mt-2 text-lg'>Ir a linkdIn</span>
                    </Link>
                </section>
            </GridBox>

            {/* Gmail Link */}
            <GridBox className="col-start-1 col-end-7">
                <section className="p-8 text-2xl">
                    <Link
                        href="mailto:drojasl3@ucentral.edu.co?subject=Contacto&body=Hola,%20me%20gustaría%20contactarte...
                        %20Estos son mis datos de contacto..."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-white-800 hover:text-blue-600 transition-colors"
                    >
                        <CiMail className='text-4xl' />
                        <span className='mt-2 text-lg'>Enviar correo</span>
                    </Link>
                </section>
            </GridBox>
        </main>
    );
}