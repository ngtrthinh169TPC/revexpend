/** @format */

import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { connect } from "react-redux";

import { login } from "../redux/actions";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	pressable: {
		padding: 6,
		margin: 4,
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: "#46f",
	},
	pressableText: {
		color: "#eff",
	},
});

class LoginScreen extends React.Component {
	_login = (username, password) => {
		this.props.login(username, password);
	};
	render() {
		return (
			<View style={styles.container}>
				<Text>Login Screen</Text>
				{this.props.token.token ? (
					<Text>Current token: {this.props.token.token}</Text>
				) : (
					<Pressable
						style={styles.pressable}
						onPress={() => this._login("username", "password")}>
						<Text style={styles.pressableText}>Login</Text>
					</Pressable>
				)}
				<Pressable
					style={styles.pressable}
					onPress={() => this.props.navigation.navigate("ShowToken")}>
					<Text style={styles.pressableText}>to Token Page</Text>
				</Pressable>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	token: state.token,
});

export default connect(mapStateToProps, { login })(LoginScreen);
