import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Text } from 'react-native-picasso';
import {
  FoodTypeUnion,
  FOOD_TYPE_AVERAGE_MEAT,
  FOOD_TYPE_HEAVY_MEAT,
  FOOD_TYPE_PESCATARIAN,
  FOOD_TYPE_VEGAN,
  FOOD_TYPE_VEGETARIAN,
  OFFSET_TYPE_FOOD,
} from '../../constants/CoreConstants';
import { getOffsetFood } from '../../core/helpers/offset-helpers';
import { offsetReducer } from '../../state/offsetReducer';
import Button from '../Button';
import RadioButton from '../RadioButton';

interface CProps {
  onSave: () => void;
}

const FoodSheet: React.FC<CProps> = (props) => {
  const { onSave } = props;
  const [offset, setOffset] = offsetReducer.use();
  const [foodType, setFoodType] = useState<FoodTypeUnion>(
    offset.OFFSET_TYPE_FOOD.foodType
  );

  const save = () => {
    setOffset((prev) => ({
      ...prev,
      [OFFSET_TYPE_FOOD]: {
        foodType,
        value: getOffsetFood(foodType),
      },
    }));

    onSave();
  };

  return (
    <View>
      <ScrollView>
        <Text className="size-md mb-md">
          What option best describes your diet ?
        </Text>
        <RadioButton
          onCheck={() => setFoodType(FOOD_TYPE_VEGAN)}
          label="🥒 Vegan"
          checked={foodType === FOOD_TYPE_VEGAN}
        />
        <RadioButton
          className="mt-md"
          onCheck={() => setFoodType(FOOD_TYPE_VEGETARIAN)}
          label="🥗 Vegetarian"
          checked={foodType === FOOD_TYPE_VEGETARIAN}
        />
        <RadioButton
          className="mt-md"
          onCheck={() => setFoodType(FOOD_TYPE_PESCATARIAN)}
          label="🐟 Pescatarian"
          checked={foodType === FOOD_TYPE_PESCATARIAN}
        />
        <RadioButton
          className="mt-md"
          onCheck={() => setFoodType(FOOD_TYPE_AVERAGE_MEAT)}
          label="🥓 Average meat eater (twice a week)"
          checked={foodType === FOOD_TYPE_AVERAGE_MEAT}
        />
        <RadioButton
          className="mt-md"
          onCheck={() => setFoodType(FOOD_TYPE_HEAVY_MEAT)}
          label="🥩 Heavy meat eater (every day)"
          checked={foodType === FOOD_TYPE_HEAVY_MEAT}
        />
        <Button className="mt-md" onPress={save} title="Save" />
      </ScrollView>
    </View>
  );
};

export default FoodSheet;
