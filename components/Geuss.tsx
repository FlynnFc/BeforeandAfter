"use client";

import React, { useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { generate, count } from "random-words";

const Geuss = () => {
  const [before, setBefore] = useState("");
  const [after, setAfter] = useState("");
  const [playerguess, setGuess] = useState("");
  const [regenWord, setRegenword] = useState(false);
  const word = useMemo(() => {
    const temp = generate({ minLength: 5, maxLength: 5 }) as unknown as string;
    return temp;
  }, [regenWord]);

  const validWord = (guess: string) => {
    //If word is not in list list
    if (guess.length === 5) {
      return true;
    } else {
      toast.error("Thats not a recognised word");
      return false;
    }
  };

  const currentStringColide = (
    currentGeuss: string,
    comparer: "after" | "before"
  ) => {
    switch (comparer) {
      case "after":
        setAfter((prev) => {
          if (currentGeuss > prev) return currentGeuss;
          else {
            toast.error(`${prev} is already a better guess`);
            return prev;
          }
        });
        break;
      case "before":
        setBefore((prev) => {
          if (currentGeuss < prev) return currentGeuss;
          else {
            toast.error(`${prev} is already a better guess`);
            return prev;
          }
        });
        break;
    }
  };

  console.log(word);
  const worderComparer = (geuss: string) => {
    //Breaks out of comparer if not a valid guess
    if (!validWord(geuss.toLowerCase())) return;

    //Checking alphabetical order of word
    if (geuss < word) {
      if (after) {
        currentStringColide(geuss, "after");
      } else setAfter(geuss);
    } else {
      if (before) {
        currentStringColide(geuss, "before");
      } else setBefore(geuss);
    }
  };

  const submitHandler = (e: { preventDefault: () => void }) => {
    const temp = playerguess.toLowerCase();
    if (temp === word) {
      toast.success("THATS THE WORD YIPEE");
      setRegenword((prev) => !prev);
    }
    e.preventDefault();
    console.log("testing");
    worderComparer(temp);
    setGuess("");
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <p className="text-base items-start justify-start gap-1">
        This word comes After:{" "}
        <span className="text-xl font-bold text-white">{after}</span>
      </p>

      <form className="py-2 border-base-300" onSubmit={submitHandler}>
        <input
          type="text"
          value={playerguess}
          onChange={(e) => setGuess(e.target.value)}
          className="input input-lg input-bordered input-primary text-xl w-[30rem]"
        />
      </form>
      <p className="text-base items-start justify-start gap-1">
        This word comes Before:{" "}
        <span className="text-xl font-bold text-white">{before}</span>
      </p>
    </div>
  );
};

export default Geuss;
