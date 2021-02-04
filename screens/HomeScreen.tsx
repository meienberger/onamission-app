import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View } from 'react-native-picasso';
import PicassoImage from '../components/PicassoImage';
import Layout from '../constants/Layout';

export default function HomeScreen() {
	return (
		<View className="flex-1 bg-white">
			<StatusBar style="light" />
			<PicassoImage
				className="mt-lg"
				source={require('../assets/images/OAM-U-blue.png')}
				style={{ width: Layout.window.width - 30, height: 100, alignSelf: 'center', resizeMode: 'contain' }}
			/>
			<Text className="size-lg p-sm align-center mt-md weight-bold">
				ON A MISSION is a swiss non-profit organisation enabling businesses and individuals to invest in
				carefully selected sustainable reforestation projects to offset their carbon emissions.
			</Text>
		</View>
	);
}
