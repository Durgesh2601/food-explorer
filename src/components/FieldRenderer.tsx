import { useState } from "react";
import { DTYPES } from "../constants/index";

const Shimmer = () => (
  <div className="shimmer w-full h-full bg-gray-200 animate-shimmer"></div>
);

export const ImageRenderer = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative ${className}`} style={{ minHeight: "200px" }}>
      {isLoading && <Shimmer />}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        className={`w-full h-auto object-cover rounded-lg transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        style={{
          display: isLoading ? "none" : "block",
        }}
      />
    </div>
  );
};

export const LinkRenderer = ({ link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline break-words"
    style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
  >
    {link}
  </a>
);

const DefaultValueRenderer = ({ value }) => (
  <p className="text-gray-700">{value}</p>
);

export const InfoRow = ({ label, value, dtype = DTYPES.STRING }) => {
  const componentDtypeMap = {
    [DTYPES.LINK]: <LinkRenderer link={value} />,
    default: <DefaultValueRenderer value={value} />,
  };
  return (
    <>
      <div className="mb-2">
        <h3 className="text-lg text-neutral-500 font-semibold">{label}</h3>
      </div>
      <div className="mb-2">
        {componentDtypeMap[dtype] || componentDtypeMap.default}
      </div>
    </>
  );
};
