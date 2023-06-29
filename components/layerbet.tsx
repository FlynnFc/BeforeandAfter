import React, { useMemo, useState } from "react";

const Layerbet = (props: {
  boundry: { before: string; after: string };
  playerguess: string;
}) => {
  const row1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  const row2 = ["j", "k", "l", "m", "n", "o", "p", "q"];
  const row3 = ["r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const rows = [row1, row2, row3];

  const selectedLetters = useMemo(() => props.playerguess, [props.playerguess]);

  const validLetter = (el: string) => {
    if (props.boundry.after === "" && props.boundry.before === "") {
      return false;
    }

    if (props.boundry.after && !props.boundry.before) {
      return selectedLetters + el < props.boundry.after[0];
    }

    if (!props.boundry.after && props.boundry.before) {
      return selectedLetters + el > props.boundry.before[0];
    }

    return (
      selectedLetters + el <
        props.boundry.after.substring(0, selectedLetters.length + 1) ||
      selectedLetters + el >
        props.boundry.before.substring(0, selectedLetters.length + 1)
    );
  };
  return (
    <div className="flex flex-col justify-center gap-4 items-center">
      <h2>{`Possible next letters for ${
        selectedLetters ? selectedLetters : "..."
      }`}</h2>{" "}
      <div className="flex flex-wrap justify-center w-auto  max-w-xl gap-[8px]">
        {rows.map((els, idx) => (
          <ul className="gap-[8px] flex flex-row" key={idx}>
            {els.map((el) => {
              return (
                <li
                  key={el}
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
