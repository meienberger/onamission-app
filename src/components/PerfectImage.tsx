import React, { useState } from 'react';
import { Image, ImageStyle, StyleSheet } from 'react-native';
import { View } from 'react-native-picasso';
import { BlurView } from 'expo-blur';
import * as Animatable from 'react-native-animatable';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

interface Props {
  url: string;
  style: ImageStyle;
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center' | undefined;
  className?: string;
}

const styles = StyleSheet.create({
  hidden: {
    position: 'absolute',
    height: 1,
    width: 1,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'hidden',
  },
});

const PerfectImage: React.FC<Props> = ({
  url,
  style,
  resizeMode,
  className,
}) => {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <View className={className} style={style}>
        <ShimmerPlaceholder style={style} />
        <Image
          style={styles.hidden}
          onLoad={() => setLoaded(true)}
          source={{ uri: url }}
        />
      </View>
    );
  }

  const blurStyle: any = { ...style };

  delete blurStyle.resizeMode;

  return (
    <View className={className} style={style}>
      <Image source={{ uri: url }} style={style} resizeMode={resizeMode} />
      <Animatable.View style={[styles.absolute, style]} animation="fadeOut">
        <BlurView
          style={[blurStyle, styles.absolute]}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
      </Animatable.View>
    </View>
  );
};

export default PerfectImage;
