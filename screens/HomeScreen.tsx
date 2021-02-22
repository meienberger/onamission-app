import clsx from "clsx";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native-picasso";
import BottomSheetBehavior from "reanimated-bottom-sheet";
import GlobalOffsetCard from "../components/offset/GlobalOffsetCard";
import OffsetBottomSheet from "../components/OffsetBottomSheet";
import { tintColorLight } from "../constants/Colors";
import { OFFSET_SECTIONS, OffsetSection } from "../constants/CoreConstants";
import Layout from "../constants/Layout";

const styles = StyleSheet.create({
  flexWrap: {
    flexWrap: "wrap",
  },
  cardContainer: {
    width: Layout.window.width / 2 - 20,
    height: 200,
  },
});

export default function HomeScreen() {
  const [bottomSheet, setBottomSheet] = React.useState<
    React.RefObject<BottomSheetBehavior>
  >();
  const [section, setSection] = React.useState<OffsetSection>();

  const renderSection = (section: OffsetSection, index: number) => {
    const left = index % 2 === 0;

    const openSection = () => {
      // console.log(bottomSheet);
      bottomSheet?.current?.snapTo(0);
      // setSection(section);
    };

    return (
      <View
        className={clsx("pb-md", { "pr-sm": left, "pl-sm": !left })}
        style={styles.cardContainer}
      >
        <TouchableOpacity
          onPress={openSection}
          className="bg-white flex-1 radius-lg"
        >
          <Text className="size-lg align-center mt-sm flex-1">
            {section.title}
          </Text>
          <View className="justifycontent-center flex-1">
            <Text className="size-lg align-center mt-sm">1</Text>
            <Text className="size-md align-center mt-sm">Individual</Text>
          </View>
          <View className="flex-1" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="light" />
      <ScrollView style={{ backgroundColor: tintColorLight }}>
        <View className="p-md">
          <Text className="size-xl color-white weight-bold">
            Hello Nicolas,
          </Text>
          <Text className="size-md mt-sm color-white">
            Your carbon footprint :
          </Text>
          <GlobalOffsetCard className="mt-md" />
          <View className="bg-blue alignself-center p-md radius-lg mt-md">
            <Text className="color-white">Do good, offset your footprint</Text>
          </View>
          <View style={styles.flexWrap} className="flex-row mt-md">
            {OFFSET_SECTIONS.map(renderSection)}
          </View>
        </View>
      </ScrollView>
      <OffsetBottomSheet onRef={(sheet) => setBottomSheet(sheet)} />
    </SafeAreaView>
  );
}
