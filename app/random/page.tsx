import Geuss from "@/components/Geuss";
import React, { useMemo } from "react";

import { random } from "5letterwords";

const page = () => {
  console.log(random());
  return (
    <div>
      <p>Poop</p>
      <Geuss generatedWord={"test"} />
    </div>
  );
};

export default page;
