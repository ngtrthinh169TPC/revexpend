/** @format */

import React from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { connect } from "react-redux";

import { addExpenditure } from "../redux/actions";

import styles from "./screen.styles";

class AddExpenditureScreen extends React.Component {
	state = {
		title: "",
		spent: "",
	};

	_addExpenditure = (expenditure) => {
		if (
			expenditure.title.length > 0 &&
			expenditure.spent.length > 0 &&
			+expenditure.spent > 0
		) {
			expenditure.spent = +expenditure.spent;
			this.props.addExpenditure(expenditure);
			this.props.navigation.navigate("ExpenditureScreen");
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
					value={this.state.spent}
					keyboardType='numeric'
					onChangeText={(text) => {
						this.setState({ ...this.state, spent: text });
					}}
				/>
				<View style={styles.buttonContainer}>
					<Pressable
						style={styles.pressable}
						onPress={() => {
							this._addExpenditure(this.state);
						}}>
						<Text style={styles.pressableText}>Add</Text>
					</Pressable>
					<Pressable
						style={styles.cancelPressable}
						onPress={() => {
							this.props.navigation.navigate("ExpenditureScreen");
						}}>
						<Text style={styles.pressableText}>Cancel</Text>
					</Pressable>
				</View>
			</View>
		);
	}
}

export default connect(null, { addExpenditure })(AddExpenditureScreen);
