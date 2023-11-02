"use client";
import { useState, ChangeEvent, KeyboardEvent } from "react";
import { useGetPostsQuery } from "@/redux/features/PostSlice";

interface Property {
  days: number | null;
  type: string;
  condition: string;
  image: string[];
  title: string;
  country: string;
  city: string;
  streetName: string;
  streetNumber: string;
  floorNumber: string;
  aptNumber: string;
  price: number;
  description: string;
}
const Search = () => {
  const [inputValue, setInputValue] = useState("");


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const values = event.target.value;
    setInputValue(values);
  };

    
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        placeholder="Buscar propiedad"
        onChange={handleChange}
        className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-1 checked:bg-emerald-500"
      ></input>
    </div>
  );
};

export default Search;
