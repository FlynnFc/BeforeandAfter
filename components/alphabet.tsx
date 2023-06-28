import React from "react";

const Alphabet = (props: { boundry: { before: string; after: string } }) => {
  const row1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  const row2 = ["j", "k", "l", "m", "n", "o", "p", "q"];
  const row3 = ["r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const rows = [row1, row2, row3];

  return (
    <>
      <h2 className="text-center font-bold text-xl pt-2 border-primary">
        Available start letters
            key={el}
      </h2>{" "}
      <div className="flex flex-wrap justify-center text-2xl max-w-[25rem] gap-[8px]">
        {rows.map((els, idx) => (
          <ul className="gap-[8px] flex flex-row" key={idx}>
            {els.map((el) => (
              <li
                key={el}
                className={`letterBox text-white ${
                  el < props.boundry.after[0] || el > props.boundry.before[0]
                    ? "bg-[#272729]"
                    : "bg-[#818384]"
                }`}
              >
                {el}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
};

export default Alphabet;
