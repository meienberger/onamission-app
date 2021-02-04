import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native-picasso';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Layout from '../constants/Layout';
import { Project } from '../core/interfaces';
import PerfectImage from './PerfectImage';
import TouchableScale from './TouchableScale';

interface Props {
	project: Project;
}

const styles = StyleSheet.create({
	image: {
		height: 180,
		borderRadius: 20,
		width: Layout.window.width / 2 - 25,
	},
	projectName: {
		position: 'absolute',
		bottom: 10,
		left: 10,
		color: 'white',
		right: 10,
		zIndex: 100,
	},
	card: {
		height: 180,
		width: Layout.window.width / 2 - 30,
		marginRight: 10,
		borderRadius: 10,
		backgroundColor: 'white',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		marginBottom: 20,
		elevation: 10,
	},
	linearGradient: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		borderRadius: 10,
		zIndex: 1,
	},
});

const ProjectCell: React.FC<Props> = (props) => {
	const { project } = props;

	return (
		<TouchableScale style={styles.card} className="flex-1">
			<PerfectImage className="elevated" style={styles.card} url={project.image} />
			<Animatable.View
				animation="fadeIn"
				duration={1000}
				delay={200}
				style={styles.linearGradient}
				useNativeDriver
			>
				<LinearGradient
					style={styles.linearGradient}
					colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.5)', 'black']}
				/>
			</Animatable.View>
			<Text className="weight-bold size-lg" style={styles.projectName}>
				{project.location}
			</Text>
		</TouchableScale>
	);
};

export default ProjectCell;
