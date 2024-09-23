import React from "react";
import "./assets/global.css";
import ParticlesThree from "@/components/particles";
import IconGallery from "@/components/icons";

const Home: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ParticlesThree />
      <main className="absolute inset-0 m-2 flex items-center justify-center">
        <div className="absolute inset-0 flex flex-col z-10 text-white bg-gray-600/50 w-full h-full border-4 border-white box-border p-4">
          <span></span>
          <h1 className="text-6xl animate-fade-in">Patricio Martinez</h1>
          <span className="ml-2">Desarrollador Fronted</span>
          <IconGallery />
        </div>
      </main>
    </div>
  );
};

export default Home;
