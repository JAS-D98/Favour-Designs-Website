import React from "react";
import TextSpan from "./TextSpan";

const Banner = ({ sentence}) => {
  return (
    <div className="mt-4 mb-2">
      {sentence.map((letter, index) => (
        <TextSpan key={index}>
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      ))}
    </div>
  );
};

export default Banner;
