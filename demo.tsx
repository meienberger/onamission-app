import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Image } from 'react-native';
import { createPicassoComponent, Text, useTheme, View, TouchableOpacity } from 'react-native-picasso';

const PImage = createPicassoComponent(Image);

export default function TabOneScreen() {
	return (
		<View className="flex-1">
			<StatusBar style="light" />
			<View className="flex-row p-sm">
				<PImage
					style={{ width: 80, height: 80 }}
					className="radius-round"
					source={{ uri: 'https://picsum.photos/id/1/200/300' }}
				/>
				<View className="flex-1">
					<View className="flex-row flex-1 alignitems-center justifycontent-around">
						<View className="alignitems-center">
							<Text className="size-md">676</Text>
							<Text className="size-sm color-secondary">posts</Text>
						</View>
						<View className="alignitems-center">
							<Text className="size-md">75.1K</Text>
							<Text className="size-sm color-secondary">followers</Text>
						</View>
						<View className="alignitems-center">
							<Text className="size-md">3,319</Text>
							<Text className="size-sm color-secondary">following</Text>
						</View>
					</View>
					<View className="flex-row alignitems-center flex-1">
						<TouchableOpacity className="bg-primary p-sm radius-sm flex-1 mx-sm">
							<Text className="color-white align-center">Follow</Text>
						</TouchableOpacity>
						<TouchableOpacity className="bg-white b-1 p-sm radius-sm flex-1 mx-sm">
							<Text className="align-center">Promote</Text>
						</TouchableOpacity>
						<TouchableOpacity className="bg-white b-1 p-sm radius-sm flex-1 mx-sm">
							<Text className="align-center">Edit profile</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View className="p-sm">
				<Text className="weight-bold">Digital Nomad entrepreneur</Text>
				<Text className="color-secondary">Entrepreneur</Text>
			</View>
			{/* <View className="p-md m-lg">
				<Text className="size-lg weight-bold align-center">React Native Picasso</Text>
			</View> */}
		</View>
	);
}
