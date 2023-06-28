import React from "react";
import { toast } from "react-hot-toast";

const Errorpop = (t: { id: string; visible: boolean }) => {
  setTimeout(() => toast.dismiss(t.id), 55500);
  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    ></div>
  );
};

export default Errorpop;
