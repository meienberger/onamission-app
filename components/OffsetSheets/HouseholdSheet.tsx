import Slider from "@react-native-community/slider";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native-picasso";
import { OFFSET_TYPE_HOUSEHOLD } from "../../constants/CoreConstants";
import { offsetReducer } from "../../state/offsetReducer";
import Button from "../Button";

interface CProps {
  onSave: () => void;
}

const HouseholdSheet: React.FC<CProps> = (props) => {
  const { onSave } = props;
  const [offset, setOffset] = offsetReducer.use();
  const [sliderValue, setSliderValue] = useState<number>(
    offset.OFFSET_TYPE_HOUSEHOLD.value
  );

  const save = () => {
    setOffset((prev) => ({
      ...prev,
      [OFFSET_TYPE_HOUSEHOLD]: {
        ...prev[OFFSET_TYPE_HOUSEHOLD],
        value: Math.round(sliderValue),
      },
    }));

    onSave();
  };

  const changeValue = (value: number) => {
    setSliderValue(value);
  };

  return (
    <View>
      <Text className="size-md align-center mb-md">
        How many people live in your home ?
      </Text>
      <Slider
        onValueChange={changeValue}
        value={sliderValue}
        maximumValue={6}
      />
      <Text className="size-lg color-secondary align-center mt-md">
        {Math.round(sliderValue)}
      </Text>
      <Button className="mt-md" onPress={save} title="Save" />
    </View>
  );
};

export default HouseholdSheet;
