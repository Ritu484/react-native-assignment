import * as React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	Keyboard,
	Image,
	TextInput,
	ActivityIndicator
} from "react-native";
import { useAddPostMutation, usePostsQuery } from "../services/postsApi";

function AddMessage({ navigation }): JSX.Element {
	const [showAdd, setShowAdd] = React.useState<Boolean>(false);
	const [caption, setCaption] = React.useState<String>("");
	const [tags, setTags] = React.useState<String[]>([]);
	const [tag, setTag] = React.useState<String>("");
	const [isLoading, setIsLoading] = React.useState<Boolean>(false);
	const [addPost] = useAddPostMutation();
	const { data } = usePostsQuery();

	const handleAddPost = async () => {
		if (!caption.length) {
			alert("Please create a post");
			return;
		}
		setIsLoading(true);
		let post = {
			userName: "Test User",
			caption,
			tags,
			id: data.body.length + 1,
			createdAt: new Date().toDateString(),
			comments: []
		};
		try {
			await addPost(post).unwrap();
		} catch (e) {
			alert("Could not perform this action");
		}
		navigation.push("Home");
	};

	if (isLoading)
		return (
			<ActivityIndicator
				size='large'
				color='#240E6C'
				style={styles.spinnerStyle}
			/>
		);
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={styles.addMessageContainer}>
				<View style={{ flexDirection: "row", marginTop: 23 }}>
					<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
						<Image source={require("../assets/back-arrow.png")} />
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={handleAddPost}>
						<View style={{ flex: 1, alignItems: "flex-end" }}>
							<Text style={styles.postActionStyle}>Post</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
				<Text style={styles.createActionStyle}>Create</Text>
				<TextInput
					style={{ color: "white" }}
					placeholderTextColor='#3F4B63'
					onChangeText={text => {
						setCaption(text);
					}}
					value={caption}
					placeholder='What’s on your mind?'
				/>
				<Text style={styles.addTagActionStyle}>Add Tags</Text>
				<View style={{ flexDirection: "row" }}>
					<View style={{ flexDirection: "column", flex: 8 }}>
						<TextInput
							style={{ color: "white", flexWrap: "wrap" }}
							placeholderTextColor='#3F4B63'
							multiline={true}
							onFocus={() => {
								setShowAdd(true);
							}}
							onChangeText={text => setTag(text)}
							value={tag}
							placeholder='Write tags'
						/>
					</View>
					<TouchableWithoutFeedback
						onPress={() => {
							tag?.length ? setTags([...tags, tag]) : null;
							setTag("");
						}}
					>
						<View style={{ flexDirection: "column", flex: 2 }}>
							{showAdd ? <Text style={styles.addActionStyle}>ADD</Text> : null}
						</View>
					</TouchableWithoutFeedback>
				</View>
				<View style={{ flexDirection: "row" }}>
					{tags?.map((item, i) => (
						<Text key={i} style={styles.tagItemStyle}>
							{item}
						</Text>
					))}
				</View>
				<Image
					style={{ marginVertical: 36 }}
					source={require("../assets/line.png")}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
}

export default AddMessage;

const styles = StyleSheet.create({
	postActionStyle: {
		color: "white",
		backgroundColor: "#E88607",
		height: 34,
		width: 80,
		borderRadius: 30,
		textAlign: "center",
		fontFamily: "Inter-Bold",
		fontSize: 16,
		textAlignVertical: "center"
	},
	createActionStyle: {
		fontFamily: "Inter-Bold",
		color: "white",
		fontSize: 15,
		lineHeight: 18,
		marginTop: 64
	},
	addTagActionStyle: {
		fontFamily: "Inter-Bold",
		color: "white",
		fontSize: 15,
		lineHeight: 18,
		marginTop: 64
	},
	addActionStyle: {
		flex: 1,
		textAlign: "right",
		color: "white",
		textAlignVertical: "center"
	},
	tagItemStyle: {
		color: "white",
		backgroundColor: "#28395A",
		height: 36,
		width: "auto",
		borderRadius: 5,
		paddingHorizontal: 7,
		marginTop: 48,
		marginRight: 10,
		paddingVertical: 7,
		alignSelf: "flex-start"
	},
	addMessageContainer: {
		flex: 1,
		backgroundColor: "black",
		paddingLeft: 17
	},
	spinnerStyle: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: "center",
		justifyContent: "center"
	}
});
