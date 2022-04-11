/** @format */

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { dropToken } from "../redux/actions";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

class ShowTokenScreen extends React.Component {
	_logOut = () => {
		this.props.dropToken();
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>token: {this.props.token.token}</Text>
				<Button title='drop token' onPress={this._logOut} />
				<Button
					title='Go to Login Screen'
					onPress={() => this.props.navigation.navigate("LoginScreen")}
				/>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	token: state.token,
});

export default connect(mapStateToProps, { dropToken })(ShowTokenScreen);
