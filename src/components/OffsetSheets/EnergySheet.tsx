import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { ScrollView, Surface } from 'react-native';
import { Text, View } from 'react-native-picasso';
import {
  InsulationTypeUnion,
  INSULATION_TYPE_HIGH,
  INSULATION_TYPE_LOW,
  INSULATION_TYPE_MEDIUM,
  MAX_SURFACE,
  OFFSET_TYPE_ENERGY,
} from '../../constants/CoreConstants';
import { getOffsetEnergy } from '../../core/helpers/offset-helpers';
import { offsetReducer } from '../../state/offsetReducer';
import Button from '../Button';
import RadioButton from '../RadioButton';

interface CProps {
  onSave: () => void;
}

const EnergySheet: React.FC<CProps> = (props) => {
  const { onSave } = props;
  const [offset, setOffset] = offsetReducer.use();
  const [sliderValue, setSliderValue] = useState<number>(
    offset.OFFSET_TYPE_ENERGY.surface
  );
  const [renewable, setRenewable] = useState<boolean | null>(
    offset.OFFSET_TYPE_ENERGY.renewable
  );
  const [insulation, setInsulation] = useState<InsulationTypeUnion>(
    offset.OFFSET_TYPE_ENERGY.insulation
  );

  const save = () => {
    setOffset((prev) => ({
      ...prev,
      [OFFSET_TYPE_ENERGY]: {
        ...prev[OFFSET_TYPE_ENERGY],
        renewable,
        insulation,
        surface: Math.round(sliderValue),
        value: getOffsetEnergy(insulation, Math.round(sliderValue), renewable),
      },
    }));

    onSave();
  };

  const changeValue = (value: number) => {
    setSliderValue(value);
  };

  return (
    <View>
      <ScrollView>
        <Text className="size-md mb-md">What’s the surface of your home ?</Text>
        <Slider
          onValueChange={changeValue}
          value={sliderValue}
          maximumValue={MAX_SURFACE}
        />
        <Text className="size-lg color-secondary align-center mt-md">
          {Math.round(sliderValue)} m2
        </Text>
        <Text className="size-md mb-md mt-lg">
          Do you use renewable energy at home ?
        </Text>
        <RadioButton
          checked={renewable === true}
          onCheck={() => setRenewable(true)}
          className="mb-md"
          label="😊 Yes"
        />
        <RadioButton
          checked={renewable === false}
          onCheck={() => setRenewable(false)}
          className="mb-md"
          label="😢 No"
        />
        <RadioButton
          checked={renewable === null}
          onCheck={() => setRenewable(null)}
          className="mb-md"
          label="🤔 I don’t know"
        />
        <Text className="size-md mb-md mt-lg">
          How is your home insulated ?
        </Text>
        <RadioButton
          className="mb-md"
          checked={insulation === INSULATION_TYPE_HIGH}
          onCheck={() => setInsulation(INSULATION_TYPE_HIGH)}
          label="😊 High-efficiency"
        />
        <RadioButton
          className="mb-md"
          checked={insulation === INSULATION_TYPE_MEDIUM}
          onCheck={() => setInsulation(INSULATION_TYPE_MEDIUM)}
          label="😕 Medium efficiency"
        />
        <RadioButton
          className="mb-md"
          checked={insulation === INSULATION_TYPE_LOW}
          onCheck={() => setInsulation(INSULATION_TYPE_LOW)}
          label="😢 Low efficiency"
        />
        <Button className="mt-md" onPress={save} title="Save" />
      </ScrollView>
    </View>
  );
};

export default EnergySheet;
