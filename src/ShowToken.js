/** @format */

import React from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { connect } from "react-redux";

import { dropToken } from "../redux/actions";

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
		borderColor: "#eff",
		borderRadius: 5,
		backgroundColor: "#46f",
	},
	pressableText: {
		color: "#eff",
	},
});

class ShowTokenScreen extends React.Component {
	_logOut = () => {
		this.props.dropToken();
	};

	render() {
		return (
			<View style={styles.container}>
				{this.props.token.token ? (
					<>
						<Text>token: {this.props.token.token}</Text>
						<Pressable style={styles.pressable} onPress={this._logOut}>
							<Text style={styles.pressableText}>drop Token</Text>
						</Pressable>
					</>
				) : (
					<Text>Token not found D:</Text>
				)}
				<Pressable
					style={styles.pressable}
					onPress={() => this.props.navigation.navigate("LoginScreen")}>
					<Text style={styles.pressableText}>go to Login Screen</Text>
				</Pressable>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	token: state.token,
});

export default connect(mapStateToProps, { dropToken })(ShowTokenScreen);
