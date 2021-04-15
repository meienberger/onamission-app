import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-picasso';
import Layout from '../constants/Layout';
import { Project } from '../core/interfaces';
import { RootStackParamList } from '../navigation/types';
import PerfectImage from './PerfectImage';
import TouchableScale from './TouchableScale';

interface Props {
  project: Project;
  navigation: StackNavigationProp<RootStackParamList, 'Projects'>;
}

const styles = StyleSheet.create({
  projectName: {},
  card: {
    height: 150,
    width: Layout.window.width - 40,
    overflow: 'hidden',
  },
  image: { height: 150, width: 170 },
});

const ProjectCell: React.FC<Props> = (props) => {
  const { project, navigation } = props;

  return (
    <TouchableScale
      style={styles.card}
      className="flex-1 b-2 bg-white mb-lg elevated radius-md alignself-center flex-row"
      onPress={() => navigation.navigate('ProjectDetails', { project })}
    >
      <PerfectImage
        className="elevated"
        style={styles.image}
        url={project.image}
      />
      <View className="flex-1 p-md">
        <Text style={styles.projectName} className="size-md">
          {project.location}
        </Text>
        <Text
          style={styles.projectName}
          className="size-sm color-secondary mt-sm"
        >
          {project.description}
        </Text>
      </View>
    </TouchableScale>
  );
};

export default ProjectCell;
