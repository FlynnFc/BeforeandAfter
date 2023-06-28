"use client";

import { isValid, random } from "5letterwords";
import React, { useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import Alphabet from "./alphabet";

const Geuss = () => {
  const [before, setBefore] = useState("");
  const [after, setAfter] = useState("");
  const [playerguess, setGuess] = useState("");
  const [word, setWord] = useState(random());
  const [debug, setDebug] = useState(false);
  const [inputBorder, setInputBorder] = useState<
    "input-primary" | "input-error"
  >("input-primary");

  const validWord = (guess: string) => {
    if (isValid(guess)) {
      return true;
    }
    toast.error("Thats not a recognised word");
    return false;
  };

  const errorWiggle = () => {
    setInputBorder("input-error");
    setTimeout(() => setInputBorder("input-primary"), 500);
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
            errorWiggle();
            return prev;
          }
        });
        break;
      case "before":
        setBefore((prev) => {
          if (currentGeuss < prev) return currentGeuss;
          else {
            toast.error(`${prev} is already a better guess`);
            errorWiggle();
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
      setWord(random());
      setAfter("");
      setBefore("");
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
          className={`input input-lg ${inputBorder}  text-xl w-[23rem]`}
        />
      </form>
      <p className="text-base items-start justify-start gap-1">
        This word comes Before:{" "}
        <span className="text-xl font-bold text-white">{before}</span>
      </p>
      <div className="fixed bottom-0 right-0 flex flex-col m-2">
        <h4 className="flex items-center gap-2">
          Debug:{" "}
          <input
            onChange={(e) => setDebug(e.target.checked)}
            className="checkbox checkbox-sm"
            type="checkbox"
            name=""
            id=""
          />
        </h4>
        {debug && <span> {`word=${word}`}</span>}
      </div>
      <Alphabet boundry={{ before, after }} />
    </div>
  );
};

export default Geuss;
