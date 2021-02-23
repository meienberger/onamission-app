import React, { RefObject, useEffect, useRef } from "react";
import { View, Text } from "react-native-picasso";
import BottomSheetBehavior from "reanimated-bottom-sheet";
import BottomSheet from "reanimated-bottom-sheet";
import {
  OffsetSection,
  OffsetTypeUnion,
  OFFSET_SECTIONS,
  OFFSET_TYPE_HOUSEHOLD,
  OFFSET_TYPE_LEISURE,
} from "../constants/CoreConstants";
import { offsetReducer } from "../state/offsetReducer";
import HouseholdSheet from "./OffsetSheets/HouseholdSheet";
import LeisureSheet from "./OffsetSheets/LeisureSheet";

interface CProps {
  onRef?: (sheet: React.RefObject<BottomSheet>) => void;
  section?: OffsetTypeUnion;
}

const OffsetBottomSheet: React.FC<CProps> = (props) => {
  const { onRef, section } = props;
  const sheetRef = useRef<BottomSheetBehavior>(null);
  const [offset, setOffset] = offsetReducer.use();

  useEffect(() => {
    if (onRef) {
      onRef(sheetRef);
    }
  }, [sheetRef]);

  const onSave = () => {
    sheetRef.current?.snapTo(1);
  };

  const renderContent = () => {
    switch (section) {
      case OFFSET_TYPE_HOUSEHOLD:
        return (
          <View style={{ height: 450 }} className="bg-white p-lg">
            <HouseholdSheet onSave={onSave} />
          </View>
        );
      case OFFSET_TYPE_LEISURE:
        return (
          <View style={{ height: 450 }} className="bg-white p-lg">
            <LeisureSheet onSave={onSave} />
          </View>
        );
      default:
        return (
          <View className="p-lg bg-white" style={{ height: 450 }}>
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
