import React from "react";
import ParticlesThree from "../components/particles";
import IconGallery from "../components/icons";
import Toggle from "../components/ToggleTheme";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white dark:bg-black">
      <ParticlesThree />
      <main className="absolute inset-0 m-2 flex items-center justify-center">
        <div className="space-y-4 absolute inset-0 flex flex-col z-10 bg-gray-600/70 dark:bg-gray-800/50 text-white w-full h-full border-4 border-black box-border p-4 dark:border-white">
          <Toggle />
          <h1 className="text-6xl animate-fade-in text-black dark:text-white">
            Patricio Martinez
          </h1>
          <span className="ml-2 text-black dark:text-white">
            Desarrollador de Software
          </span>
          <IconGallery />
          <section className="m-2 text-2xl text-black dark:text-white box-border">
            <div className="w-1/2 h-auto bg-gray-600/50">
              Proyectos
              <div
                tabIndex={0}
                className="w-auto h-auto ml-2 text-xl text-gray-700 rounded focus:outline-none hover:ring hover:ring-slate-600 focus:scale-110 focus:translate-x-20 focus:translate-y-10 focus:bg-gray-400/50 transform transition-transform duration-300"
              >
                <a
                  href="https://itbank-psi.vercel.app/homebanking"
                  target="_blank"
                >
                  Instituto Tecnologico de Buenos Aires
                  <Image
                    src="/itbank.png"
                    width={500}
                    height={500}
                    alt="Proyecto Academico hecho en next"
                  ></Image>
                  <span className="text-base text-black dark:text-white">
                    Esta Web fue desarrollada en Next, aprendimos lo basico,
                    desde HTML, CSS, JS hasta aprender Next, indagamos en el uso
                    de rutas dinamicas, client y server component
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
