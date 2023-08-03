import React, { useState } from "react";
import "./App.css"; // Import the separate CSS file
import { wordsCount } from "words-count";

const WordCounter = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const resize = () => {
    const textarea = document.getElementById("textarea"); // Refactor to use React's ref system
    if (textarea) {
      textarea.style.height = "";
      textarea.style.height = Math.max(textarea.scrollHeight, 600) + "px";
    }

    setCount(wordsCount(value));
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    resize();
  };

  return (
    <main className="flex flex-col items-center">
      <br />
      <h1>Word Counter</h1>
      <br />
      <br />
      <textarea
        id="textarea"
        value={value}
        onChange={handleChange}
        className="bg-[#0a2a17] h-[600px] w-3/5 rounded-2xl outline-transparent p-6 text-white shadow-light-400"
      />
      <section className="count-thing bg-[#22c55e] fixed z-99 bottom-4 rounded-2xl p-2">
        <h1 className="leading-[1.1] shadow-dark-200 text-[#041109]">
          {count}
        </h1>
      </section>
    </main>
  );
};

export default WordCounter;
