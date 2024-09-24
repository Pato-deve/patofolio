import React from "react";
import ParticlesThree from "../components/particles";
import IconGallery from "../components/icons";
import Toggle from "../components/ToggleTheme";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import "./assets/global.css";

const Home: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-white dark:bg-black">
      <ParticlesThree />
      <div className="space-y-4 m-2 flex flex-col z-10 bg-gray-800/40 dark:bg-gray-800/60 min-w-screen min-h-screen border-4 border-black p-4 dark:border-white">
        <div className="flex justify-between z-20">
          <Toggle />
          <Link href="/practicas">
            Practicas
            <HiArrowLongRight />
          </Link>
        </div>
        <main className="flex flex-col items-center justify-center w-full h-full z-10">
          <div className="text-center opacity-100">
            <h1 className="text-3xl md:text-6xl text-black dark:text-white">
              Patricio Martinez
            </h1>
            <span className="ml-2 text-lg md:text-xl text-black dark:text-white">
              Desarrollador de Software
            </span>
          </div>
          <div className="flex justify-center items-center h-20 w-1/2 mt-6 hover:scale-110 transform transition-transform duration-300">
            <IconGallery />
          </div>
          <section className="m-4 text-2xl text-black dark:text-white box-border w-full">
            <div className="p-4 w-full md:w-3/4 lg:w-1/2 h-auto bg-slate-100/90 dark:bg-gray-700/90 rounded mx-auto">
              <b>Proyectos</b>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
                <div
                  tabIndex={0}
                  className="z-10 w-full md:w-1/2 p-4 text-xl text-gray-700 rounded focus:outline-none hover:ring focus:ring hover:ring-slate-600 focus:ring-slate-600 focus:scale-105 transform transition-transform duration-300 dark:text-white bg-gray-300 dark:bg-gray-700"
                >
                  <h3>Pagina bancaria</h3>
                  <a
                    href="https://itbank-psi.vercel.app/homebanking"
                    target="_blank"
                    className="block mt-2"
                  >
                    <Image
                      src="/itbank.png"
                      width={500}
                      height={500}
                      alt="Proyecto Academico hecho en next"
                      className="w-full h-auto rounded"
                    />
                  </a>
                  <b className="block mt-4">
                    Instituto Tecnologico de Buenos Aires
                  </b>
                  <span className="text-base text-black dark:text-white block mt-2">
                    Esta Web fue desarrollada en <b>Next</b>, aprendimos lo
                    básico, desde <b>HTML, CSS, JS</b> hasta aprender
                    <b>Next</b>, indagamos en el uso de rutas dinámicas, client
                    y server components.
                  </span>
                </div>
                <div
                  tabIndex={0}
                  className="z-10 w-full md:w-1/2 p-4 text-xl text-gray-700 rounded focus:outline-none hover:ring focus:ring hover:ring-slate-600 focus:ring-slate-600 focus:scale-105 transform transition-transform duration-300 dark:text-white bg-gray-300 dark:bg-gray-700"
                >
                  <h3>Base de datos de un banco</h3>
                  <a href="" target="_blank" className="block mt-2">
                    <Image
                      src="/workProgress.png"
                      width={500}
                      height={500}
                      alt="Proyecto Academico hecho en next"
                      className="w-full h-auto rounded"
                    />
                  </a>
                  <b className="block mt-4">
                    Instituto Tecnologico de Buenos Aires
                  </b>
                  <span className="text-base text-black dark:text-white block mt-2">
                    En este proyecto vamos a trabajar con
                    <b>Python, Django, MongoDB y SQL</b> para crear la base de
                    datos del proyecto anterior.
                  </span>
                </div>
              </div>
            </div>
          </section>
          <footer className="p-4 w-2/4 bg-slate-100/90 rounded flex justify-center space-x-4 dark:bg-gray-600/50">
            <a
              href="https://github.com/Pato-deve"
              target="_blank"
              className="hover:ring hover:ring-slate-600 text-black dark:text-white z-40"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://linkedin.com/in/patricio-martínez-86a001180"
              target="_blank"
              className="hover:ring hover:ring-slate-600 text-black dark:text-white z-40"
            >
              <FaLinkedin size={30} />
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Home;
