import React from "react";
import ParticlesThree from "../components/particles";
import IconGallery from "../components/icons";
import Toggle from "../components/ToggleTheme";

const Home: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white dark:bg-black">
      <ParticlesThree />
      <main className="absolute inset-0 m-2 flex items-center justify-center">
        <div className="absolute inset-0 flex flex-col z-10 bg-gray-600/50 dark:bg-gray-800/50 text-white w-full h-full border-4 border-black box-border p-4 dark:border-white">
          <Toggle />
          <span></span>
          <h1 className="text-6xl animate-fade-in text-black dark:text-white">
            Patricio Martinez
          </h1>
          <span className="ml-2 text-black dark:text-white">
            Desarrollador de Software
          </span>
          <IconGallery />
        </div>
      </main>
    </div>
  );
};

export default Home;
