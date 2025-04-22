import React from "react";

const Main = () => {
  return (
    <main className="font-inter p-10">
      <form className="flex flex-col gap-2 justify-center md:flex-row">
        <input
          className="border-2 border-gray-300 rounded-md px-2 h-8 md:grow md:max-w-[400px]"
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button className="bg-black text-white rounded-md before:content-['+'] before:mr-1 h-8 px-8">
          Add ingredient
        </button>
      </form>
    </main>
  );
};

export default Main;
