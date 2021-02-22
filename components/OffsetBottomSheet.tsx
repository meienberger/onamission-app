import React, { RefObject, useEffect, useRef } from "react";
import { View, Text } from "react-native-picasso";
import BottomSheetBehavior from "reanimated-bottom-sheet";
import BottomSheet from "reanimated-bottom-sheet";
import { OffsetSection } from "../constants/CoreConstants";

interface CProps {
  onRef?: (sheet: React.RefObject<BottomSheet>) => void;
  section?: OffsetSection;
}

const OffsetBottomSheet: React.FC<CProps> = (props) => {
  const { onRef } = props;
  const sheetRef = useRef<BottomSheetBehavior>(null);

  useEffect(() => {
    if (onRef) {
      onRef(sheetRef);
    }
  }, [sheetRef]);

  const renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
  );

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[450, 300, 0]}
      borderRadius={20}
      renderContent={renderContent}
    />
  );
};

export default OffsetBottomSheet;
