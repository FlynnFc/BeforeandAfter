"use client";

import { isValid, random } from "5letterwords";
import React, { useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import Alphabet from "./alphabet";
import Layerbet from "./layerbet";

const Geuss = () => {
  const [before, setBefore] = useState("");
  const [after, setAfter] = useState("");
  const [playerguess, setGuess] = useState("");
  const [word, setWord] = useState(random());
  const [debug, setDebug] = useState(false);
  const [inputBorder, setInputBorder] = useState<
    "input-primary" | "input-error"
  >("input-primary");
  const [modalWord, setModalWord] = useState("");
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);

  const successHandler = () => {
    toast.success("THATS THE WORD YIPEE");
    setModalWord(word);
  };

  const validWord = (guess: string) => {
    if (isValid(guess)) {
      return true;
    }
    toast.error("Thats not a recognised word");
    return false;
  };

  const errorWiggle = () => {
    setInputBorder("input-error");
    setTimeout(() => setInputBorder("input-primary"), 800);
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

  const worderComparer = (geuss: string) => {
    //Breaks out of comparer if not a valid guess
    if (!validWord(geuss.toLowerCase())) return;
    setNumberOfGuesses((prev) => prev + 1);
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
      successHandler();
    }
    e.preventDefault();
    console.log("testing");
    worderComparer(temp);
    setGuess("");
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      {modalWord && (
        <div className="top-0 fixed left-0 bg-black/50 h-screen z-50 flex-col w-screen flex justify-start items-center">
          <section className="gap-4 rounded-btn shadow-lg flex flex-col max-w-xl mt-20 bg-base-content text-base-300 top-20 p-4">
            <h2 className="text-3xl text-center">Thats right!</h2>
            <h3>
              The word was: <span className="font-bold">{modalWord}</span>
            </h3>
            <h3>
              It took you <span className="font-bold">{numberOfGuesses}</span>{" "}
              guesses
            </h3>
            <article>
              <h4 className="text-lg font-semibold">Definition:</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam earum totam vel excepturi rerum recusandae inventore
                maiores, magnam dolorum? Aliquid, neque! Odio, minima ipsa illum
                ut voluptatibus nisi exercitationem suscipit.
              </p>
            </article>
            <button
              onClick={() => {
                setNumberOfGuesses(0);
                setModalWord("");
                setWord(random());
                setAfter("");
                setBefore("");
              }}
              className="btn"
            >
              Play again
            </button>
          </section>
        </div>
      )}
      <h2>
        Guesses: <span>{numberOfGuesses}</span>
      </h2>
      <p className="text-base items-start justify-start gap-1">
        This word comes After:{" "}
        <span className="text-xl font-bold text-white">{after}</span>
      </p>

      <form className="py-2 border-base-300" onSubmit={submitHandler}>
        <input
          type="text"
          value={playerguess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Guess a 5 letter word"
          className={`input h-16 ${inputBorder}  text-3xl w-full animate-pulse bg-transparent focus:animate-none`}
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
          />
        </h4>
        {debug && <span> {`word=${word}`}</span>}
      </div>
      {/* <Alphabet boundry={{ before, after }} /> */}
      <Layerbet boundry={{ before, after }} />
    </div>
  );
};

export default Geuss;
