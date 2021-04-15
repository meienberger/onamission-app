import { StackScreenProps } from '@react-navigation/stack';
import { Project } from '../core/interfaces';

export type RootStackParamList = {
  HomeScreen: undefined;
  Projects: undefined;
  ProjectDetails: {
    project: Project;
  };
};

export type ProjectsScreenProps = StackScreenProps<
  RootStackParamList,
  'Projects'
>;
