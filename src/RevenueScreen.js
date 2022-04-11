/** @format */

import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

const RevenueScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Revenue Screen</Text>
		</View>
	);
};

export default RevenueScreen;
