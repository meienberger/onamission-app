import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Image } from 'react-native';
import { View } from 'react-native-picasso';

export default function HomeScreen() {
	return (
		<View className="flex-1">
			<StatusBar style="light" />
		</View>
	);
}
