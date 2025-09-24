// src/components/InfoBlock.tsx
import React from "react";

interface InfoBlockProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const InfoBlock: React.FC<InfoBlockProps> = ({
  title,
  subtitle,
  description,
  image,
  reverse = false,
}) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-1 items-center  ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <div className="w-full h-[300px] md:h-[500px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover "
        />
      </div>

      {/* Text */}
      <div className="bg-green-800 text-white p-6  h-[300px] md:h-[500px] items-center justify-center flex flex-col ">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <h3 className="text-lg font-semibold mb-4">{subtitle}</h3>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default InfoBlock;
