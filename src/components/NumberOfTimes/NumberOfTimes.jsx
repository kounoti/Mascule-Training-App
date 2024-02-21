import { useState } from "react";
import { Select } from "@chakra-ui/react";
import { counters } from "./Counters";

export const NumberOfTimes = () => {
  const [numberOfTimes, setNumberOfTimes] = useState(0);

  return (
    <>
      <h2>回数を選択</h2>
      <Select
        placeholder=""
        value={numberOfTimes}
        onChange={(e) => setNumberOfTimes(e.target.value)}
      >
        {counters.map((numberOfTime) => {
          return (
            <option key={numberOfTime} value={numberOfTime}>
              {numberOfTime}
            </option>
          );
        })}
      </Select>
    </>
  );
};
