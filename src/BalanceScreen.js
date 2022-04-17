/** @format */

import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import styles from "./screen.styles";

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#333",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// 	text: {
// 		fontSize: 24,
// 	},
// 	balance: {
// 		color: "#fe7",
// 		fontWeight: "bold",
// 	},
// });

class LoginScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={[styles.text, styles.totalText]}>
					Total Revenue: {this.props.revenues.totalGain}
				</Text>
				<Text style={[styles.text, styles.totalText]}>
					Total Expenditure: {this.props.expenditures.totalSpent}
				</Text>
				<Text style={[styles.text, styles.totalText, styles.balance]}>
					Balance:{" "}
					{this.props.revenues.totalGain - this.props.expenditures.totalSpent}
				</Text>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	expenditures: state.expenditures,
	revenues: state.revenues,
});

export default connect(mapStateToProps)(LoginScreen);
