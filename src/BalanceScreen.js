/** @format */

import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

import styles from "./screen.styles";

class LoginScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={[styles.text, styles.headingText]}>
					Total Revenue: {this.props.revenues.totalGain}
				</Text>
				<Text style={[styles.text, styles.headingText]}>
					Total Expenditure: {this.props.expenditures.totalSpent}
				</Text>
				<Text style={[styles.text, styles.headingText, styles.balance]}>
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
