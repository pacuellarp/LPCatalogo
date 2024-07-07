import { useEffect, useState } from "react";
import Image from "next/image";

export default function ImageDisplay({ src, alt, width, height }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`image-container ${isVisible ? "fade-in" : ""}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="styled-image"
      />
      <style jsx>{`
        .image-container {
          display: inline-block;
          margin: 20px;
          border-radius: 15px;
          overflow: hidden;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        .image-container.fade-in {
          opacity: 1;
        }
        .styled-image {
          border-radius: 15px;
        }
      `}</style>
    </div>
  );
}
