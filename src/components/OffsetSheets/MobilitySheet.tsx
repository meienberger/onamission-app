import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Text } from 'react-native-picasso';
import {
  CommuteTypeUnion,
  COMMUTE_TYPE_BIKE,
  COMMUTE_TYPE_CAR,
  COMMUTE_TYPE_ELECTRIC_CAR,
  COMMUTE_TYPE_PUBLIC,
  OFFSET_TYPE_MOBILITY,
} from '../../constants/CoreConstants';
import { getOffsetMobility } from '../../core/helpers/offset-helpers';
import { offsetReducer } from '../../state/offsetReducer';
import Button from '../Button';
import RadioButton from '../RadioButton';

interface CProps {
  onSave: () => void;
}

const MobilitySheet: React.FC<CProps> = (props) => {
  const { onSave } = props;
  const [offset, setOffset] = offsetReducer.use();
  const [commuteType, setCommuteType] = useState<CommuteTypeUnion>(
    offset.OFFSET_TYPE_MOBILITY.commuteType
  );

  const [kilometers, setKilometers] = useState<number>(
    offset.OFFSET_TYPE_MOBILITY.kilometers
  );

  const save = () => {
    setOffset((prev) => ({
      ...prev,
      [OFFSET_TYPE_MOBILITY]: {
        commuteType,
        kilometers,
        value: getOffsetMobility(commuteType, kilometers),
      },
    }));

    onSave();
  };

  return (
    <View>
      <ScrollView>
        <Text className="size-md mb-md">How do you commute ?</Text>
        <RadioButton
          onCheck={() => setCommuteType(COMMUTE_TYPE_BIKE)}
          label="🚴 Bike"
          checked={commuteType === COMMUTE_TYPE_BIKE}
        />
        <RadioButton
          className="mt-md"
          onCheck={() => setCommuteType(COMMUTE_TYPE_CAR)}
          label="🚗 Car"
          checked={commuteType === COMMUTE_TYPE_CAR}
        />
        <RadioButton
          className="mt-md"
          onCheck={() => setCommuteType(COMMUTE_TYPE_ELECTRIC_CAR)}
          label="🚙 Electric Car"
          checked={commuteType === COMMUTE_TYPE_ELECTRIC_CAR}
        />
        <RadioButton
          className="mt-md"
          onCheck={() => setCommuteType(COMMUTE_TYPE_PUBLIC)}
          label="🚌 Public transportation"
          checked={commuteType === COMMUTE_TYPE_PUBLIC}
        />
        <Text className="size-md mb-md mt-xl">
          How many kilometers do you do per year ?
        </Text>
        <RadioButton
          checked={kilometers === 5000}
          className="mt-md"
          onCheck={() => setKilometers(5000)}
          label="Up to 5'000 km/y"
        />
        <RadioButton
          className="mt-md"
          checked={kilometers === 10000}
          onCheck={() => setKilometers(10000)}
          label="Between 5'000 and 15'000 km/y"
        />
        <RadioButton
          className="mt-md"
          checked={kilometers === 22500}
          onCheck={() => setKilometers(22500)}
          label="Between 15'000 and 30'000 km/y"
        />
        <RadioButton
          className="mt-md"
          checked={kilometers === 40000}
          onCheck={() => setKilometers(40000)}
          label="More than 30'000 km/y"
        />
        <RadioButton
          className="mt-md"
          checked={kilometers === 15000}
          onCheck={() => setKilometers(15000)}
          label="I don't know"
        />
        <Button className="mt-md" onPress={save} title="Save" />
      </ScrollView>
    </View>
  );
};

export default MobilitySheet;
