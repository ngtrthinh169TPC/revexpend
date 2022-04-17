/** @format */

import React from "react";
import { Text, View, Pressable } from "react-native";
import { connect } from "react-redux";

import { login } from "../redux/actions";

import styles from "./screen.styles";

class LoginScreen extends React.Component {
	_login = (username, password) => {
		this.props.login(username, password);
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Login Screen</Text>
				{this.props.token.token ? (
					<Text style={styles.text}>
						Current token: {this.props.token.token}
					</Text>
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
