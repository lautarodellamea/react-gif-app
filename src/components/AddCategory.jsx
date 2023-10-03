import { useState } from "react";


export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("" );

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input className=" w-full text-white  rounded-lg p-3 border border-slate-900 focus:outline-none bg-slate-800 focus:border-sky-600 text-xl placeholder:text-xl" type="text" placeholder="Buscar Gif..." value={inputValue} onChange={onInputChange}/>
    </form>
  );
};


