import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Text } from 'react-native-picasso';
import {
  OFFSET_TYPE_SHOPPING,
  ShoppingTypeUnion,
  SHOPPING_TYPE_NECESSARY,
  SHOPPING_TYPE_REALLY_NECESSARY,
  SHOPPING_TYPE_REGULARLY,
} from '../../constants/CoreConstants';
import { getShoppingOffset } from '../../core/helpers/offset-helpers';
import { offsetReducer } from '../../state/offsetReducer';
import Button from '../Button';
import RadioButton from '../RadioButton';

interface CProps {
  onSave: () => void;
}

const ShoppingSheet: React.FC<CProps> = (props) => {
  const { onSave } = props;
  const [offset, setOffset] = offsetReducer.use();
  const [shoppingType, setShoppingType] = useState<ShoppingTypeUnion>(
    offset.OFFSET_TYPE_SHOPPING.shoppingType
  );

  const save = () => {
    setOffset((prev) => ({
      ...prev,
      [OFFSET_TYPE_SHOPPING]: {
        shoppingType,
        value: getShoppingOffset(shoppingType),
      },
    }));

    onSave();
  };

  return (
    <View>
      <ScrollView>
        <Text className="size-md mb-md">
          What option best describes how you shop ?
        </Text>
        <RadioButton
          onCheck={() => setShoppingType(SHOPPING_TYPE_REALLY_NECESSARY)}
          label="🛠 I only shop when really necessary. I try to repare or use second hand items."
          checked={shoppingType === SHOPPING_TYPE_REALLY_NECESSARY}
        />
        <RadioButton
          className="mt-md"
          onCheck={() => setShoppingType(SHOPPING_TYPE_NECESSARY)}
          label="🛒 I shop when necessary but I try to be careful."
          checked={shoppingType === SHOPPING_TYPE_NECESSARY}
        />
        <RadioButton
          className="mt-md"
          onCheck={() => setShoppingType(SHOPPING_TYPE_REGULARLY)}
          label="💸 I shop regularly. I need to have the last trendy items."
          checked={shoppingType === SHOPPING_TYPE_REGULARLY}
        />
        <Button className="mt-md" onPress={save} title="Save" />
      </ScrollView>
    </View>
  );
};

export default ShoppingSheet;
