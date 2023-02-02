import React, { useEffect, useState, CSSProperties } from "react";
import { StoryViewProps } from "../utils/interfaceHelper";
import {
	View,
	Image,
	StyleSheet,
	Text,
	SafeAreaView,
	Dimensions,
} from "react-native";
import ProgressiveImage from "./ProgressiveImage";

function StoryView(props: StoryViewProps) {
	const [refresh, setRefresh] = useState(true);
	const classes = ['divStory0','divStory1','divStory2','divStory3'];
	const image = props.images[props.progressIndex];
	 console.log(classes[props.progressIndex]);    
	 console.log(props.classStyle[props.progressIndex]);    
	return (
		<SafeAreaView style={props.classStyle[props.progressIndex] ? props.classStyle[props.progressIndex]: styles.divStory}>
			<View style={styles.divStory}>
			
				<ProgressiveImage
					style={props.imageStyle ? props.imageStyle : styles.imgStyle}
					imgSource={{ uri: image }}
					thumbnailSource={{ uri: image }}
				/>
			</View>
		</SafeAreaView>
	);
}

export default StoryView;

const styles = StyleSheet.create({
	divStory: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		width: "100%",
		height: "100%",
		alignContent: "center",
		alignItems: "center",
		backgroundColor:"#CACACA",
		
	},
	imgStyle: {
		//marginTop:"5%",
		// marginLeft:"10%",
		// marginRight:"10%",
		width: Dimensions.get("window").width,
		height: "100%",
		alignSelf: "center",
		resizeMode: "stretch",


			//marginTop:"2s%",
		// marginLeft:"10%",
		// marginRight:"10%",
		// width: Dimensions.get("window").width,
		// height: "100%",
		// alignSelf: "center",
		
		// resizeMode: "stretch",
	},
});
