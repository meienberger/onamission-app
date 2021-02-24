import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native-picasso';

interface CProps {
  checked?: boolean;
  label: string;
  onCheck?: () => void;
  className?: string;
}

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
  },
  content: {
    width: 12,
    height: 12,
  },
  label: {
    marginTop: -3,
  },
});

const RadioButton: React.FC<CProps> = (props) => {
  const { onCheck, checked, label, className } = props;

  return (
    <TouchableOpacity
      onPress={onCheck}
      className={`${className} flex-row alignitems-center`}
    >
      <View
        style={styles.container}
        className="b-2 bordercolor-primary radius-round alignitems-center justifycontent-center mr-sm"
      >
        {checked && (
          <View className="bg-primary radius-round" style={styles.content} />
        )}
      </View>
      <Text style={styles.label} className="size-md">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
