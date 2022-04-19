/** @format */

import { StyleSheet } from "react-native";

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
		height: 24,
		margin: 5,
		color: "#fff",
		borderColor: "#fff",
		borderWidth: 1,
		padding: 5,
	},
	headingText: {
		padding: 8,
		fontSize: 20,
	},
	text: {
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
});
