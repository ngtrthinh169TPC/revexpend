/** @format */

import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import { login } from "../redux/actions";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

// const LoginScreen = ({ navigation }) => {
// 	const dispatch = useDispatch();

// 	return (
// 		<View style={styles.container}>
// 			<Text>Login Screen</Text>
// 			{/* <Text>Current token: {token}</Text> */}
// 			<Button
// 				title='Login'
// 				onPress={() => dispatch(login("username", "password"))}
// 			/>
// 			<Button
// 				title='to Token'
// 				onPress={() => navigation.navigate("ShowToken")}
// 			/>
// 		</View>
// 	);
// };

class LoginScreen extends React.Component {
	_login = (username, password) => {
		this.props.login(username, password);
	};
	render() {
		return (
			<View style={styles.container}>
				<Text>Login Screen</Text>
				<Text>Current token: {this.props.token.token}</Text>
				<Button
					title='Login'
					onPress={() => this._login("username", "password")}
				/>
				<Button
					title='to Token'
					onPress={() => this.props.navigation.navigate("ShowToken")}
				/>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	token: state.token,
});

// export default LoginScreen;
export default connect(mapStateToProps, { login })(LoginScreen);
