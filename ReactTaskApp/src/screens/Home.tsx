import * as React from "react";
import {
	StyleSheet,
	Text,
	FlatList,
	View,
	TouchableWithoutFeedback,
	Image,
	ActivityIndicator
} from "react-native";
import MessageContainer from "../components/MessageContainer";
import { usePostsQuery } from "../services/postsApi";
import { PostModal } from "../data-modals/post.modal";

function Home({ navigation }): JSX.Element {
	const [postList, setPostList] = React.useState<PostModal[] | null>(null);
	const { data, isLoading } = usePostsQuery();

	React.useEffect(() => {
		setPostList(data?.body);
	}, [data]);

	const ItemSeparator = () => (
		<Image
			style={{ marginVertical: 36 }}
			source={require("../assets/line.png")}
		/>
	);

	if (isLoading)
		return (
			<ActivityIndicator
				size='large'
				color='#240E6C'
				style={styles.spinnerStyle}
			/>
		);

	return (
		<View style={{ flex: 1, backgroundColor: "black" }}>
			<View style={styles.headerView}>
				<Image source={require("../assets/profile-pic.png")} />
				<Text style={styles.headerStyle}>Chirpz</Text>
			</View>
			<Image
				style={{ marginVertical: 36 }}
				source={require("../assets/line.png")}
			/>
			<FlatList
				data={postList}
				renderItem={({ item }) => (
					<MessageContainer
						userName={item.userName}
						caption={item.caption}
						tags={item.tags}
						isVerified={item.isVerified}
					/>
				)}
				keyExtractor={item => item.id.toString()}
				ItemSeparatorComponent={ItemSeparator}
			/>
			<TouchableWithoutFeedback
				onPress={() => {
					navigation.push("AddMessage");
				}}
			>
				<Image
					style={styles.bottomActionStyle}
					source={require("../assets/plus-sign.png")}
				/>
			</TouchableWithoutFeedback>
		</View>
	);
}

export default Home;

const styles = StyleSheet.create({
	headerStyle: {
		color: "white",
		flex: 1,
		marginLeft: "30%",
		textAlignVertical: "center",
		fontFamily: "Inter-Bold",
		fontSize: 20,
		lineHeight: 24
	},
	headerView: {
		flexDirection: "row",
		marginTop: 23,
		marginLeft: 17
	},
	bottomActionStyle: {
		position: "absolute",
		bottom: 16,
		right: 16
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
