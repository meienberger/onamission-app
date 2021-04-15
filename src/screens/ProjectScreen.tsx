import React from 'react';
import { View, Text, createPicassoComponent } from 'react-native-picasso';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { ScrollView, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { RootStackParamList } from '../navigation/types';

const styles = StyleSheet.create({
  mapContainer: {
    height: 180,
    overflow: 'hidden',
  },
});

const PicassoMap = createPicassoComponent(MapView);

type ProjectScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'ProjectDetails'
>;
type ProjectScreenRouteProp = RouteProp<RootStackParamList, 'ProjectDetails'>;
interface CProps {
  navigation: ProjectScreenNavigationProps;
  route: ProjectScreenRouteProp;
}

const ProjectScreen: React.FC<CProps> = ({ route }) => {
  const { project } = route.params;

  return (
    <View className="flex-1">
      <ScrollView>
        <View className="p-md">
          <Text className="weight-bold size-md">{project.title}</Text>
          <View className="flex-row mt-md alignitems-center">
            <Entypo name="location-pin" size={24} color="black" />
            <Text className="color-secondary ml-sm">{project.location}</Text>
          </View>
          <View className="flex-row mt-md alignitems-center">
            <Entypo name="tree" size={24} color="black" />
            <Text className="color-secondary ml-sm">
              {project.objective} trees to be planted
            </Text>
          </View>
          <View className="mt-md">
            <Text className="color-secondary">{project.description}</Text>
          </View>
          <View className="mt-md radius-lg b-1" style={styles.mapContainer}>
            <PicassoMap className="flex-1" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProjectScreen;
