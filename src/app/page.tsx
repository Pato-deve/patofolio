import React from "react";
import ParticlesThree from "../components/particles";
import IconGallery from "../components/icons";
import Toggle from "../components/ToggleTheme";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Home: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white dark:bg-black">
      <ParticlesThree />
      <main className="absolute inset-0 m-2 flex items-center justify-center">
        <div className="space-y-4 absolute inset-0 flex flex-col z-10 bg-gray-600/70 dark:bg-gray-800/50 text-white w-full h-full border-4 border-black box-border p-4 dark:border-white">
          <Toggle />
          <h1 className="text-3xl md:text-6xl animate-fade-in text-black dark:text-white text-center">
            Patricio Martinez
          </h1>
          <span className="ml-2 text-lg md:text-xl text-black dark:text-white text-center">
            Desarrollador de Software
          </span>
          <section className="m-2 text-2xl text-black dark:text-white box-border">
            <div className="p-2 w-1/2 h-auto bg-gray-600/50 rounded">
              Proyectos
              <div className="flex">
                <div
                  tabIndex={0}
                  className="z-10 w-3/5 h-auto ml-2 p-2 text-xl text-gray-700 rounded focus:outline-none hover:ring focus:ring hover:ring-slate-600 focus:ring-slate-600 focus:scale-110 focus:translate-x-20 focus:translate-y-10 focus:bg-gray-400 transform transition-transform duration-300 dark:text-white"
                >
                  Pagina bancaria
                  <a
                    href="https://itbank-psi.vercel.app/homebanking"
                    target="_blank"
                    className="w-fit"
                  >
                    <Image
                      src="/itbank.png"
                      width={500}
                      height={500}
                      alt="Proyecto Academico hecho en next"
                    ></Image>
                  </a>
                  Instituto Tecnologico de Buenos Aires<br></br>
                  <span className="text-base text-black dark:text-white">
                    Esta Web fue desarrollada en Next, aprendimos lo basico,
                    desde HTML, CSS, JS hasta aprender Next, indagamos en el uso
                    de rutas dinamicas, client y server component
                  </span>
                </div>
                <div
                  tabIndex={0}
                  className="z-0 w-3/5 h-auto ml-2 p-2 text-xl text-gray-700 rounded focus:outline-none hover:ring focus:ring hover:ring-slate-600 focus:ring-slate-600 focus:scale-110 focus:translate-x-20 focus:translate-y-10 focus:bg-gray-400 transform transition-transform duration-300 dark:text-white"
                >
                  Base de datos de una pagina bancaria
                  <a href="" target="_blank" className="w-fit">
                    <Image
                      src="/workProgress.png"
                      width={500}
                      height={500}
                      alt="Proyecto Academico hecho en next"
                    ></Image>
                  </a>
                  Instituto Tecnologico de Buenos Aires<br></br>
                  <span className="text-base text-black dark:text-white">
                    En este proyecto vamos a trabajar con Python, Django,
                    MongoDB y SQL para crear la base de datos del proyecto
                    anterior
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center h-20 w-2/4 content-center">
              <IconGallery />
            </div>
          </section>
          <footer className="p-2 w-fit h-auto bg-gray-600/50 rounded">
            Links de interes
            <div className="flex">
              <a
                href="https://github.com/Pato-deve"
                target="_blank"
                className="hover:ring hover:ring-slate-600 m-2"
              >
                <FaGithub size={30}></FaGithub>
              </a>
              <a
                href="https://linkedin.com/in/patricio-martínez-86a001180"
                target="_blank"
                className="hover:ring hover:ring-slate-600 m-2"
              >
                <FaLinkedin size={30}></FaLinkedin>
              </a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Home;
