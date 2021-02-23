import React from "react";
import { Text, TouchableOpacity } from "react-native-picasso";

interface CProps {
  onPress?: () => void;
  title: string;
  className?: string;
}

const Button: React.FC<CProps> = (props) => {
  const { className, title, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${className} bg-primary p-md alignitems-center radius-md`}
    >
      <Text className="color-white size-md weight-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
