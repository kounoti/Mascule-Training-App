import { useState } from "react";
import { Select } from "@chakra-ui/react";
import { SelectTrainingMenu } from "../SelectTraining/SelectTrainingMenu";

const muscleParts = ["胸", "背中", "脚", "肩", "腕"];

export const SelectMuscleParts = () => {
  const [musclePartsName, setMusclePartsName] = useState("");

  return (
    <>
      <h2>鍛える部位を選択</h2>
      <Select
        placeholder=""
        value={musclePartsName}
        onChange={(e) => setMusclePartsName(e.target.value)}
      >
        {muscleParts.map((musclePart) => {
          return (
            <option key={musclePart} value={musclePart}>
              {musclePart}
            </option>
          );
        })}
      </Select>

      <SelectTrainingMenu musclePartsName={musclePartsName} />
    </>
  );
};
