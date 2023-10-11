import React from "react";
import Card from "./Card";
import dataCard from "./dataCard";

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-10 md:gap-y-16 p-8 md:p-10">
      {dataCard.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cards;
