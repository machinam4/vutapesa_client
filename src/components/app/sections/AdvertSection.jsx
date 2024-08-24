import { Card, Image } from "antd";
import React from "react";

function AdvertSection() {
  return (
    <div>
      {[...Array(4)].map((_, index) => (
        <Image
          key={index}
          loading="true"
          className="w-full object-cover rounded-md mb-3"
          src={`/adverts/image (${index}).webp`}
          alt="Game Example"
        />
      ))}
    </div>
  );
}

export default AdvertSection;
