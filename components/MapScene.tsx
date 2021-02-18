import React from "react";
import { Text } from "react-native";
import MapView, { LatLng, Polygon } from "react-native-maps";
import { View } from "react-native-picasso";
import { Project } from "../core/interfaces";

interface CProps {
  projects: Project[];
}

const MapScene: React.FC<CProps> = ({ projects }) => {
  const renderPolygon = (project: Project) => {
    if (project.geoJson) {
      const coordinates: LatLng[] = project.geoJson[0].map((e) => {
        return { latitude: e[1], longitude: e[0] };
      });

      console.log(coordinates);
      return (
        <Polygon strokeColor="red" strokeWidth={3} coordinates={coordinates} />
      );
    } else {
      return <Text>dwefrs</Text>;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }}>{projects.map(renderPolygon)}</MapView>
    </View>
  );
};

export default MapScene;
