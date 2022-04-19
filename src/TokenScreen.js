/** @format */

import React from "react";
import { View, Text, Pressable } from "react-native";
import { connect } from "react-redux";

import { dropToken } from "../redux/actions";

import styles from "./screen.styles";

class TokenScreen extends React.Component {
	_logOut = () => {
		this.props.dropToken();
	};

	render() {
		return (
			<View style={styles.container}>
				<Pressable
					style={[styles.pressable, styles.topRightPressable]}
					onPress={() => this.props.navigation.navigate("LoginScreen")}>
					<Text style={styles.pressableText}>to Login Screen</Text>
				</Pressable>
				<Text style={[styles.text, styles.headingText]}>Token Screen</Text>
				{this.props.token.token ? (
					<>
						<Text style={styles.text}>token: {this.props.token.token}</Text>
						<Pressable style={styles.pressable} onPress={this._logOut}>
							<Text style={styles.pressableText}>drop Token</Text>
						</Pressable>
					</>
				) : (
					<Text style={[styles.text.color, styles.badText]}>
						Token not found D:
					</Text>
				)}
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	token: state.token,
});

export default connect(mapStateToProps, { dropToken })(TokenScreen);
