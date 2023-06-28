import Geuss from "@/components/Geuss";
import React, { useMemo } from "react";
import { random } from "5letterwords";

const page = () => {
  const word = random();

  return (
    <div className="flex justify-center">
      <Geuss generatedWord={word} />
    </div>
  );
};

export default page;
