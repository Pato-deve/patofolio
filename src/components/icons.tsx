"use client";
import { SiTypescript, SiReact, SiNextdotjs } from "react-icons/si";
import { useSwipeable } from "react-swipeable";

const IconGallery: React.FC = () => {
  const icons = [SiNextdotjs, SiTypescript, SiReact];

  const handlers = useSwipeable({
    onSwipedLeft: () => console.log("Swiped left"),
    onSwipedRight: () => console.log("Swiped right"),
    trackMouse: true,
  });

  return (
    <div className="relative w-64 h-12 p-1 overflow-hidden bg-gray-500/50">
      <div
        {...handlers}
        className="inline-flex items-center space-x-8 animate-marquee ml-2"
      >
        {icons.map((Icon, index) => (
          <div key={index} className="flex justify-center items-center">
            <Icon className="w-10 h-10 text-gray-400" />
          </div>
        ))}
        {icons.map((Icon, index) => (
          <div
            key={`copy-${index}`}
            className="flex justify-center items-center"
          >
            <Icon className="w-10 h-10 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconGallery;
