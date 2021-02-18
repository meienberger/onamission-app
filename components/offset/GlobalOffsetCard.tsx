import React from "react";
import { Text, View } from "react-native-picasso";

interface CProps {
  className?: string;
}

const GlobalOffsetCard: React.FC<CProps> = ({ className }) => {
  return (
    <View className={`${className} bg-white p-lg radius-lg`}>
      <Text className="align-center size-xl">10.6</Text>
      <Text className="align-center">tons CO2/y</Text>
      <Text className="color-secondary size-sm align-center mt-sm">
        This is the average carbon footprint in Switzerland. Try to precise your
        carbon footprint
      </Text>
    </View>
  );
};

export default GlobalOffsetCard;
