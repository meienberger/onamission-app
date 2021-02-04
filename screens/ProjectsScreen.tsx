import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { View, Text } from 'react-native-picasso';
import ProjectCell from '../components/ProjectCell';
import { Project } from '../core/interfaces';

const data: Project[] = [
	{
		image:
			'https://images.squarespace-cdn.com/content/v1/5c98bda2c2ff611a49966134/1559816172092-W8RAQQ4F2KD4MN1HP66E/ke17ZwdGBToddI8pDm48kJbosy0LGK_KqcAZRQ_Qph1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyRoXPauM_hSH3XAFUMH3fmO1jdMVKkonRM0cGdyUtJRnZ7FnwXS6LE3CJOOwAGcs0/pe%CC%81pinie%CC%80re3Mocagua-1900x1425.jpg?format=500w',
		location: 'Colombia',
		title: 'Connecting the Atlantic Forest through wildlife corridors',
		description:
			'The Atlantic Forest, is among the world’s top five biodiversity hotspots. Trees are planted with the purpose of reconnecting remaining forest patches and grow new forest corridors.',
	},
	{
		image:
			'https://images.squarespace-cdn.com/content/v1/5c98bda2c2ff611a49966134/1558698792400-MDG0D6CE8APZ40W0NG9G/ke17ZwdGBToddI8pDm48kAZjn-mKHA8C0aXyb3aDsesUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKctGagLi2bPeWvgyaXFkRSRiZ8eC1onD-aqPTLzoJlDSFqH6JdE1TCNUCN0lH1bNYP/3.+PreparingSeedlings_July2016A%CC%82%C2%A9WeForest.jpg?format=500w',
		location: 'Brazil',
		title: 'Connecting the Atlantic Forest through wildlife corridors',
		description:
			'The Atlantic Forest, is among the world’s top five biodiversity hotspots. Trees are planted with the purpose of reconnecting remaining forest patches and grow new forest corridors.',
	},
	{
		image:
			'https://images.squarespace-cdn.com/content/v1/5c98bda2c2ff611a49966134/1575237276434-ON7OUFC83GOTHRM79FC3/ke17ZwdGBToddI8pDm48kDTAbh0CONbwTX3ZvYLG-DdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIKerXT_9qQd4b25ou8tSp2e2gEQVf_dO1eloENzeNrB8KMshLAGzx4R3EDFOm1kBS/ZAM_TrainingGrafting_Sep2016_%C2%A9WeForest.jpg?format=500w',
		location: 'Zambia',
		title: 'Making farmers become part of the solution to restore forests',
		description:
			'The reforestation project involves hundreds of farmers. Providing them with training and tools to diversify their sources of income.',
	},
	{
		image:
			'https://images.squarespace-cdn.com/content/v1/5c98bda2c2ff611a49966134/1558682975929-B0ZIP1NJ2SZRWM4GFDK6/ke17ZwdGBToddI8pDm48kDEDYh4Y0JGhR6hzuwcJ44gUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcz6bs2FkMoqlrQIzq4g5ogDqXr_T7rMikH_TfPkEE4wwzGwe9KEhUq6A0DxOZf-75/Majunga-Nursery-2-with-tentree-watermark-1024x683.jpg?format=500w',
		location: 'Madagascar',
		title: 'Reforesting a country where 90% of the native forests have been destroyed',
		description:
			'The project includes two National Park systems, which aim to reforest and revive natural habitat for endangered and endemic animal species.',
	},
];

export default function TabTwoScreen() {
	return (
		<View className="bg-white flex-1">
			<Text className="size-lg align-center mt-md">Projects</Text>
			<View className="mt-md" style={styles.separator} />
			<FlatList
				numColumns={2}
				contentContainerStyle={styles.flatListContent}
				data={data}
				renderItem={({ item }) => <ProjectCell project={item} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	flatListContent: {
		padding: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		height: 1,
		width: '80%',
		alignSelf: 'center',
		backgroundColor: 'lightgray',
	},
});
