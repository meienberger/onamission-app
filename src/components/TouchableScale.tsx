import React, { useRef } from 'react';
import { Animated, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-picasso';

interface Props {
  onPress?: () => void;
  style?: ViewStyle;
  className?: string;
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const TouchableScale: React.FC<Props> = ({
  onPress,
  children,
  style,
  className,
}) => {
  const SCALE = {
    // This defines animation behavior we expext onPressIn
    pressInAnimation(animated: Animated.Value, duration = 150) {
      Animated.timing(animated, {
        toValue: 0.95,
        duration,
        useNativeDriver: true,
      }).start();
    },
    // This defines animatiom behavior we expect onPressOut
    pressOutAnimation(animated: Animated.Value, duration = 150) {
      Animated.timing(animated, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }).start();
    },
  };

  const scaleAnim = useRef(new Animated.Value(1)).current;

  return (
    <AnimatedTouchable
      className={className}
      onPressIn={() => {
        SCALE.pressInAnimation(scaleAnim);
      }}
      onPressOut={() => {
        SCALE.pressOutAnimation(scaleAnim);
      }}
      onPress={onPress}
      activeOpacity={0.8}
      style={[style, { transform: [{ scale: scaleAnim }] }]}
    >
      {children}
    </AnimatedTouchable>
  );
};

export default TouchableScale;
