import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MAX_CHARACTERS } from "../constants";

const MessageContainer: JSX.Element = ({
	userName,
	caption,
	tags = [],
	isVerified
}) => {
	const [showText, setShowText] = useState<Boolean>(false);
	return (
		<View style={{ marginLeft: 22, marginTop: 16 }}>
			<View style={{ flexDirection: "row" }}>
				<Text style={styles.userNameStyle}>{userName}</Text>
				{isVerified ? (
					<Image
						style={{ marginLeft: 16 }}
						source={require("../assets/verified-img.png")}
					/>
				) : null}
			</View>
			<Text
				onPress={() => {
					setShowText(true);
				}}
				style={styles.captionStyle}
			>
				{caption.length > MAX_CHARACTERS && !showText
					? caption.substr(0, MAX_CHARACTERS) + "...Read More"
					: caption}
			</Text>
			<View style={{ flexDirection: "row" }}>
				{tags.map((item, i) => (
					<Text key={i} style={styles.tagStyle}>
						{item}
					</Text>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	userNameStyle: {
		fontFamily: "Inter-Bold",
		color: "white",
		fontSize: 15,
		lineHeight: 18
	},
	captionStyle: {
		fontFamily: "Inter-Light",
		color: "#A6B6D6",
		fontSize: 15,
		lineHeight: 18,
		marginTop: 16
	},
	tagStyle: {
		fontFamily: "Inter-Light",
		fontSize: 14,
		color: "#CFD7E7",
		backgroundColor: "#28395A",
		height: 36,
		width: "auto",
		borderRadius: 5,
		paddingHorizontal: 7,
		marginTop: 36,
		marginRight: 16,
		paddingVertical: 7,
		alignSelf: "flex-start"
	}
});
export default MessageContainer;
