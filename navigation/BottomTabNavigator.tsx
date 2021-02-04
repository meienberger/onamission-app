import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useTheme } from 'react-native-picasso';
import { Theme } from 'react-native-picasso/build/styles/defaultTheme';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import ProjectsScreen from '../screens/ProjectsScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
	const theme = useTheme();

	return (
		<BottomTab.Navigator initialRouteName="Offset" tabBarOptions={{ activeTintColor: theme.colors?.darkblue }}>
			<BottomTab.Screen
				name="Home"
				component={HomeTabNavigator}
				options={{
					tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
				}}
			/>
			<BottomTab.Screen
				name="Projects"
				component={ProjectsTabNavigator}
				options={{
					tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
				}}
			/>
		</BottomTab.Navigator>
	);
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
	return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator();

function HomeTabNavigator() {
	const theme: Theme = useTheme();

	return (
		<HomeStack.Navigator>
			<HomeStack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					headerTitle: 'ON A MISSION',
					headerStyle: { backgroundColor: theme.colors?.darkblue },
					headerTintColor: '#fff',
				}}
			/>
		</HomeStack.Navigator>
	);
}

const ProjectsStack = createStackNavigator();

function ProjectsTabNavigator() {
	const theme: Theme = useTheme();

	return (
		<ProjectsStack.Navigator>
			<ProjectsStack.Screen
				name="ProjectsScreen"
				component={ProjectsScreen}
				options={{
					headerTitle: 'Projects & News',
					headerStyle: { backgroundColor: theme.colors?.darkblue },
					headerTintColor: '#fff',
				}}
			/>
		</ProjectsStack.Navigator>
	);
}
