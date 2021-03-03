import React, { RefObject, useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-picasso';
import BottomSheet from 'reanimated-bottom-sheet';
import {
  OffsetTypeUnion,
  OFFSET_TYPE_ENERGY,
  OFFSET_TYPE_FOOD,
  OFFSET_TYPE_HOUSEHOLD,
  OFFSET_TYPE_LEISURE,
  OFFSET_TYPE_MOBILITY,
  OFFSET_TYPE_SHOPPING,
} from '../constants/CoreConstants';
import EnergySheet from './OffsetSheets/EnergySheet';
import FoodSheet from './OffsetSheets/FoodSheet';
import HouseholdSheet from './OffsetSheets/HouseholdSheet';
import LeisureSheet from './OffsetSheets/LeisureSheet';
import MobilitySheet from './OffsetSheets/MobilitySheet';
import ShoppingSheet from './OffsetSheets/ShoppingSheet';

interface CProps {
  onRef?: (sheet: React.RefObject<BottomSheet>) => void;
  section?: OffsetTypeUnion;
}

const styles = StyleSheet.create({
  sheetStyle: {
    height: 450,
  },
});

const Sheet: React.FC = (props) => {
  const { children } = props;

  return (
    <View style={styles.sheetStyle} className="bg-white p-lg">
      {children}
    </View>
  );
};

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
          <Sheet>
            <HouseholdSheet onSave={onSave} />
          </Sheet>
        );
      case OFFSET_TYPE_LEISURE:
        return (
          <Sheet>
            <LeisureSheet onSave={onSave} />
          </Sheet>
        );
      case OFFSET_TYPE_MOBILITY:
        return (
          <Sheet>
            <MobilitySheet onSave={onSave} />
          </Sheet>
        );
      case OFFSET_TYPE_ENERGY:
        return (
          <Sheet>
            <EnergySheet onSave={onSave} />
          </Sheet>
        );
      case OFFSET_TYPE_FOOD:
        return (
          <Sheet>
            <FoodSheet onSave={onSave} />
          </Sheet>
        );
      case OFFSET_TYPE_SHOPPING:
        return (
          <Sheet>
            <ShoppingSheet onSave={onSave} />
          </Sheet>
        );
      default:
        return (
          <Sheet>
            <Text>Swipe down to close</Text>
          </Sheet>
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
