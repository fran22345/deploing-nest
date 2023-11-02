import React from "react";
import Card from "../Card/Card";
import { Post } from "@/redux/features/PostSlice";

interface Property {
  id: number | string
  days: number;
  type: string;
  condition: string;
  image: string[];
  title: string;
  country: string;
  city: string;
  streetName: string;
  streetNumber: string;
  floorNumber: number;
  aptNumber: string;
  price: number;
  description: string;
}

interface CardsProps {
  properties:Post[];
}

const Cards: React.FC<CardsProps> = ({ properties }) => {

  return (
    <div className="flex justify-center aling-center gap-10 flex-wrap">
      {Array.isArray(properties) ? (
        properties.map((property, index) => <Card key={index} {...property} />)
      ) : (
        <p>No properties to display.</p>
      )}
    </div>
  );
};

export default Cards;
