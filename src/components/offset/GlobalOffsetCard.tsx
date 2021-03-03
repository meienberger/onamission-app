import React from 'react';
import { Text, View } from 'react-native-picasso';
import { getTotalOffset } from '../../core/helpers/offset-helpers';
import { offsetReducer } from '../../state/offsetReducer';

interface CProps {
  className?: string;
}

const GlobalOffsetCard: React.FC<CProps> = ({ className }) => {
  const offset = offsetReducer.useValue();

  return (
    <View className={`${className} bg-white p-lg radius-lg`}>
      <Text className="align-center size-xl">{getTotalOffset(offset)}</Text>
      <Text className="align-center">tons CO2/y</Text>
      <Text className="color-secondary size-sm align-center mt-sm">
        This is the average carbon footprint in Switzerland. Try to precise your
        carbon footprint
      </Text>
    </View>
  );
};

export default GlobalOffsetCard;
