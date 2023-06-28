import React from "react";

const Alphabet = (props: { boundry: { before: string; after: string } }) => {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  console.log(props.boundry);
  return (
    <>
      <h2 className="text-center font-bold text-xl pt-2 border-primary">
        Available start letters
      </h2>
      <ul className="grid grid-cols-7 text-lg max-w-[30rem] gap-1 ">
        {letters.map((el) => (
          <li
            key={el}
            className={`letterBox ${
              el < props.boundry.after[0] || el > props.boundry.before[0]
                ? "bg-black text-base-100"
                : "bg-primary/30"
            }`}
          >
            {el}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Alphabet;
