"use client";
import { DiDjango } from "react-icons/di";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { useSwipeable } from "react-swipeable";

const IconGallery: React.FC = () => {
  const icons = [
    SiNextdotjs,
    SiTypescript,
    SiReact,
    SiPython,
    SiMysql,
    DiDjango,
    SiMongodb,
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => console.log("Swiped left"),
    onSwipedRight: () => console.log("Swiped right"),
    trackMouse: true,
  });

  return (
    <div className="bg-slate-100 dark:bg-gray-700/80 overflow-hidden w-full">
      <div
        {...handlers}
        className="flex items-center justify-center space-x-8 animate-marquee whitespace-nowrap"
      >
        {icons.map((Icon, index) => (
          <div key={index} className="flex justify-center items-center">
            <Icon size={30} className="text-gray-300" />
          </div>
        ))}
        {icons.map((Icon, index) => (
          <div
            key={`copy-${index}`}
            className="flex justify-center items-center"
          >
            <Icon size={30} className="text-gray-400 dark:text-gray-300" />
          </div>
        ))}
        {icons.map((Icon, index) => (
          <div
            key={`copy-${index}`}
            className="flex justify-center items-center"
          >
            <Icon size={30} className="text-gray-400 dark:text-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconGallery;
