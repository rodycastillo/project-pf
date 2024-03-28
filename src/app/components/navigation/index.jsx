import { BtnList } from "@/app/data";
import React from "react";
import { NavButton } from "./NavButton";

export const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;

  return (
    <div className="fixed w-full h-screen flex items-center justify-center">
      <div className="flex item-center justify-between relative animate-spin-slow hover:pause">
        {BtnList.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180;
          const radius = "calc(20vw - 1rem)";
          const x = `calc(${radius}*${Math.cos(angleRad)})`;
          const y = `calc(${radius}*${Math.sin(angleRad)})`;

          return <NavButton key={index} x={x} y={y} {...btn} />;
        })}
      </div>
    </div>
  );
};
