import React, { RefObject, useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-picasso';
import BottomSheet from 'reanimated-bottom-sheet';
import {
  OffsetTypeUnion,
  OFFSET_TYPE_HOUSEHOLD,
  OFFSET_TYPE_LEISURE,
} from '../constants/CoreConstants';
import HouseholdSheet from './OffsetSheets/HouseholdSheet';
import LeisureSheet from './OffsetSheets/LeisureSheet';

interface CProps {
  onRef?: (sheet: React.RefObject<BottomSheet>) => void;
  section?: OffsetTypeUnion;
}

const styles = StyleSheet.create({
  sheetStyle: {
    height: 450,
  },
});

const OffsetBottomSheet: React.FC<CProps> = (props) => {
  const { onRef, section } = props;
  const sheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    if (onRef) {
      onRef(sheetRef);
    }
  }, [onRef, sheetRef]);

  const onSave = () => {
    sheetRef.current?.snapTo(1);
  };

  const renderContent = () => {
    switch (section) {
      case OFFSET_TYPE_HOUSEHOLD:
        return (
          <View style={styles.sheetStyle} className="bg-white p-lg">
            <HouseholdSheet onSave={onSave} />
          </View>
        );
      case OFFSET_TYPE_LEISURE:
        return (
          <View style={styles.sheetStyle} className="bg-white p-lg">
            <LeisureSheet onSave={onSave} />
          </View>
        );
      default:
        return (
          <View className="p-lg bg-white" style={styles.sheetStyle}>
            <Text>Swipe down to close</Text>
          </View>
        );
    }
  };

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[450, 0]}
      borderRadius={20}
      initialSnap={1}
      renderContent={renderContent}
    />
  );
};

export default OffsetBottomSheet;
