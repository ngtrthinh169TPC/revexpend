/** @format */

import React from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { connect } from "react-redux";

import { addRevenue } from "../redux/actions";

import styles from "./screen.styles";

class AddRevenueScreen extends React.Component {
	state = {
		title: "",
		gain: "",
	};

	_addRevenue = (revenue) => {
		if (
			revenue.title.length > 0 &&
			revenue.gain.length > 0 &&
			+revenue.gain > 0
		) {
			revenue.gain = +revenue.gain;
			this.props.addRevenue(revenue);
			this.props.navigation.navigate("RevenueScreen");
		} else {
			console.log("invalid form");
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Title:</Text>
				<TextInput
					style={styles.modalInput}
					value={this.state.title}
					onChangeText={(text) => {
						this.setState({ ...this.state, title: text });
					}}
				/>
				<Text style={styles.text}>Money spent:</Text>
				<TextInput
					style={styles.modalInput}
					value={this.state.gain}
					keyboardType='numeric'
					onChangeText={(text) => {
						this.setState({ ...this.state, gain: text });
					}}
				/>
				<View style={styles.buttonContainer}>
					<Pressable
						style={styles.pressable}
						onPress={() => {
							this._addRevenue(this.state);
						}}>
						<Text style={styles.pressableText}>Add</Text>
					</Pressable>
					<Pressable
						style={styles.cancelPressable}
						onPress={() => {
							this.props.navigation.navigate("RevenueScreen");
						}}>
						<Text style={styles.pressableText}>Cancel</Text>
					</Pressable>
				</View>
			</View>
		);
	}
}

export default connect(null, { addRevenue })(AddRevenueScreen);
