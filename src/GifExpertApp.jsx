import { useState } from "react";

import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Tetris", "Sonic"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <section className="container mx-auto ">
      <p className="text-sky-500 font-medium">Aplicación diseñada para hacer consultas a una API</p>
      <h1 className="text-4xl mb-10 sm:text-6xl font-bold text-white">My Gif App</h1>

      <AddCategory onNewCategory={onAddCategory} />


      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </section>
  );
};
