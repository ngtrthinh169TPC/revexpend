/** @format */

import React from "react";
import { Text, View, Pressable, TextInput } from "react-native";
import { connect } from "react-redux";

import { sendLogin } from "../redux/actions";

import styles from "./screen.styles";

class LoginScreen extends React.Component {
	state = {
		username: "",
		password: "",
		showError: false,
	};

	_login = () => {
		this.props.sendLogin(this.state.username, this.state.password);
		if (this.props.token.error !== "" && this.props.token.error !== null) {
			this.setState({ ...this.state, showError: true });
		} else {
			this.setState({ username: "", password: "", showError: false });
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<Pressable
					style={[styles.pressable, styles.topRightPressable]}
					onPress={() => this.props.navigation.navigate("TokenScreen")}>
					<Text style={styles.pressableText}>to Token Page</Text>
				</Pressable>
				<Text style={[styles.text, styles.headingText]}>Login Screen</Text>
				{this.props.token.token ? (
					<>
						<Text style={styles.text}>You've logged in.</Text>
						<Text style={styles.text}>
							Current token: {this.props.token.token}
						</Text>
					</>
				) : (
					<>
						<Text style={styles.text}>Username:</Text>
						<TextInput
							style={styles.modalInput}
							value={this.state.username}
							onChangeText={(text) => {
								this.setState({
									...this.state,
									username: text,
									showError: false,
								});
							}}
						/>
						<Text style={styles.text}>Password:</Text>
						<TextInput
							style={styles.modalInput}
							value={this.state.password}
							onChangeText={(text) => {
								this.setState({
									...this.state,
									password: text,
									showError: false,
								});
							}}
							secureTextEntry={true}
						/>
						<Pressable style={styles.pressable} onPress={() => this._login()}>
							<Text style={styles.pressableText}>Login</Text>
						</Pressable>
						{this.state.showError && (
							<Text style={[styles.text, styles.badText]}>
								{this.props.token.error}
							</Text>
						)}
					</>
				)}
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	token: state.token,
});

export default connect(mapStateToProps, { sendLogin })(LoginScreen);
