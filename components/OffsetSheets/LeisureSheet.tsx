import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { View } from "react-native-animatable";
import { Text } from "react-native-picasso";
import { OFFSET_TYPE_LEISURE } from "../../constants/CoreConstants";
import { offsetReducer } from "../../state/offsetReducer";
import Button from "../Button";

interface CProps {
  onSave: () => void;
}

const LeisureSheet: React.FC<CProps> = (props) => {
  const { onSave } = props;
  const [offset, setOffset] = offsetReducer.use();

  const [shortFlights, setShortFlights] = useState<number>(
    offset.OFFSET_TYPE_LEISURE.shortFlights
  );
  const [longFlights, setLongFlights] = useState<number>(
    offset.OFFSET_TYPE_LEISURE.shortFlights
  );

  const save = () => {
    setOffset((prev) => ({
      ...prev,
      [OFFSET_TYPE_LEISURE]: {
        ...prev[OFFSET_TYPE_LEISURE],
        longFlights: Math.round(longFlights),
        shortFlights: Math.round(shortFlights),
        value: Math.round(shortFlights) * 700 + Math.round(longFlights) * 8000,
      },
    }));

    onSave();
  };

  const changeShort = (value: number) => {
    setShortFlights(value);
  };

  const changeLong = (value: number) => {
    setLongFlights(value);
  };

  return (
    <View>
      <Text className="size-md align-center mb-md">
        How many short flights ?
      </Text>
      <Slider
        onValueChange={changeShort}
        value={shortFlights}
        maximumValue={6}
      />
      <Text className="size-lg color-secondary align-center mt-md">
        {Math.round(shortFlights)}
      </Text>
      <Text className="size-md align-center mb-md mt-lg">
        How many long flights ?
      </Text>
      <Slider onValueChange={changeLong} value={longFlights} maximumValue={6} />
      <Text className="size-lg color-secondary align-center mt-md">
        {Math.round(longFlights)}
      </Text>
      <Button className="mt-md" onPress={save} title="Save" />
    </View>
  );
};

export default LeisureSheet;
