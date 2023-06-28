import React, { useState } from "react";

const Layerbet = (props: { boundry: { before: string; after: string } }) => {
  const [selectedLetters, setSelectedLetters] = useState("");
  const row1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  const row2 = ["j", "k", "l", "m", "n", "o", "p", "q"];
  const row3 = ["r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const rows = [row1, row2, row3];

  console.log("comparing", props.boundry.after, "and", props.boundry.before);

  const validLetter = (el: string) => {
    return (
      selectedLetters + el <
        props.boundry.after.substring(0, selectedLetters.length + 1) ||
      selectedLetters + el >
        props.boundry.before.substring(0, selectedLetters.length + 1)
    );
  };
  return (
    <div className="flex flex-col justify-center gap-4 items-center">
      <div className="flex justify-start w-full items-stretch gap-2">
        <button className="letterbox text-white  bg-neutral max-w-lg px-4 py-2 rounded-btn uppercase font-bold">
          {selectedLetters ? selectedLetters : " "}
        </button>{" "}
        <button
          onClick={() =>
            setSelectedLetters((prev) => prev.substring(0, prev.length - 1))
          }
          className="letterbox text-white bg-neutral max-w-lg px-4 py-2 rounded-btn uppercase font-bold"
        >
          BACK
        </button>
      </div>

      <div className="flex flex-wrap justify-center w-auto  max-w-xl gap-[8px]">
        {rows.map((els, idx) => (
          <ul className="gap-[8px] flex flex-row" key={idx}>
            {els.map((el) => {
              return (
                <li
                  key={el}
                  onClick={() => setSelectedLetters((prev) => prev + el)}
                  className={`letterBox text-white text-base md:text-lg px-3 md:px-4 ${
                    //FB < FA
                    validLetter(el) ? "bg-white/10" : "bg-[#818384]"
                  }`}
                >
                  {el}
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Layerbet;
