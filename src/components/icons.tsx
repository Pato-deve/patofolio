"use client";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiMysql,
} from "react-icons/si";

const IconGallery: React.FC = () => {
  const icons = [SiNextdotjs, SiTypescript, SiReact, SiPython, SiMysql];

  return (
    <div className="relative bg-slate-100/80 dark:bg-gray-700/80 overflow-hidden w-full">
      <div className="flex items-center space-x-8 animate-marquee whitespace-nowrap">
        {icons.map((Icon, index) => (
          <div key={index} className="flex justify-center items-center">
            <Icon size={40} className="text-gray-400 dark:text-gray-300" />
          </div>
        ))}
        {icons.map((Icon, index) => (
          <div
            key={`copy-${index}`}
            className="flex justify-center items-center"
          >
            <Icon size={40} className="text-gray-400 dark:text-gray-300" />
          </div>
        ))}
        {icons.map((Icon, index) => (
          <div key={index} className="flex justify-center items-center">
            <Icon size={40} className="text-gray-400 dark:text-gray-300" />
          </div>
        ))}
        {icons.map((Icon, index) => (
          <div
            key={`copy-${index}`}
            className="flex justify-center items-center"
          >
            <Icon size={40} className="text-gray-400 dark:text-gray-300" />
          </div>
        ))}
        {icons.map((Icon, index) => (
          <div key={index} className="flex justify-center items-center">
            <Icon size={40} className="text-gray-400 dark:text-gray-300" />
          </div>
        ))}
        {icons.map((Icon, index) => (
          <div
            key={`copy-${index}`}
            className="flex justify-center items-center"
          >
            <Icon size={40} className="text-gray-400 dark:text-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconGallery;
