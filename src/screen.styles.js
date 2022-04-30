/** @format */

import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#222",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonContainer: {
		flexDirection: "row",
	},
	item: {
		backgroundColor: "#eee",
		padding: 12,
		margin: 8,
		width: 200,
		borderRadius: 4,
		elevation: 12,
	},
	itemText: {
		color: "#025",
	},
	itemRemove: {
		backgroundColor: "#c96",
		alignItems: "center",
		justifyContent: "center",
		height: 24,
		width: 72,
		borderRadius: 5,
	},
	itemRemoveText: {
		color: "#fff",
	},
	pressable: {
		padding: 6,
		margin: 4,
		borderRadius: 5,
		backgroundColor: "#555",
	},
	pressableText: {
		color: "#fff",
	},
	cancelPressable: {
		padding: 6,
		margin: 4,
		borderRadius: 5,
		backgroundColor: "#531",
	},
	modalInput: {
		width: 240,
		height: 28,
		marginVertical: 6,
		color: "#fff",
		borderColor: "#fff",
		borderWidth: 1,
		paddingHorizontal: 8,
		paddingVertical: 4,
	},
	headingText: {
		padding: 8,
		fontSize: 20,
	},
	text: {
		textAlign: "left",
		color: "#fff",
	},
	balance: {
		fontWeight: "bold",
		color: "#fe9",
	},
	emptyListText: {
		fontSize: 20,
	},
	badText: {
		color: "#f66",
	},
	topRightPressable: {
		position: "absolute",
		top: 4,
		right: 0,
	},
	modal: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		margin: 0,
		backgroundColor: "#000b",
	},
	modalView: {
		height: Dimensions.get("window").height * 0.5,
		width: Dimensions.get("window").width * 0.8,
		backgroundColor: "#222",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 16,
	},
});
