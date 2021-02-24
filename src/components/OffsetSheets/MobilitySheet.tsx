import React, { useState } from 'react';
import { View, Text } from 'react-native-picasso';
import Button from '../Button';
import RadioButton from '../RadioButton';

interface CProps {
  onSave: () => void;
}

const COMMUTE_TYPE_BIKE = 'COMMUTE_TYPE_BIKE';
const COMMUTE_TYPE_CAR = 'COMMUTE_TYPE_CAR';
const COMMUTE_TYPE_ELECTRIC_CAR = 'COMMUTE_TYPE_ELECTRIC_CAR';
const COMMUTE_TYPE_PUBLIC = 'COMMUTE_TYPE_PUBLIC';

const MobilitySheet: React.FC<CProps> = (props) => {
  const { onSave } = props;
  const [commute, setCommute] = useState<string>();

  const save = () => {
    onSave();
  };

  return (
    <View>
      <Text className="size-md mb-md">How do you commute ?</Text>
      <RadioButton
        onCheck={() => setCommute(COMMUTE_TYPE_BIKE)}
        label="🚴 Bike"
        checked={commute === COMMUTE_TYPE_BIKE}
      />
      <RadioButton
        className="mt-md"
        onCheck={() => setCommute(COMMUTE_TYPE_CAR)}
        label="🚗 Car"
        checked={commute === COMMUTE_TYPE_CAR}
      />
      <RadioButton
        className="mt-md"
        onCheck={() => setCommute(COMMUTE_TYPE_ELECTRIC_CAR)}
        label="🚙 Electric Car"
        checked={commute === COMMUTE_TYPE_ELECTRIC_CAR}
      />
      <RadioButton
        className="mt-md"
        onCheck={() => setCommute(COMMUTE_TYPE_PUBLIC)}
        label="🚌 Public transportation"
        checked={commute === COMMUTE_TYPE_PUBLIC}
      />
      <Text className="size-md mb-md mt-xl">
        How many kilometers do you do per year ?
      </Text>
      <Button className="mt-md" onPress={save} title="Save" />
    </View>
  );
};

export default MobilitySheet;
