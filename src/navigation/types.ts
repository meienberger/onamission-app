import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  Projects: undefined;
  ProjectDetails: undefined;
};

export type ProjectsScreenProps = StackScreenProps<
  RootStackParamList,
  'Projects'
>;
