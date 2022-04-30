/** @format */

import React from "react";
import { Text, View, Pressable, Modal, TextInput } from "react-native";

import styles from "../screen.styles";

export default class AddExpenditureModal extends React.Component {
	state = {
		form: {
			title: "",
			spent: "",
		},
		warning: "",
	};

	_validateExpenditure = (expenditure) => {
		if (expenditure.title.length <= 0) {
			this.setState({ ...this.state, warning: "Please fill in your title" });
			return false;
		}
		if (expenditure.spent.length <= 0) {
			this.setState({
				...this.state,
				warning: "Please fill in your spent amount",
			});
			return false;
		}
		if (+expenditure.spent <= 0) {
			this.setState({
				...this.state,
				warning: "Please choose a valid spent amount",
			});
			return false;
		}
		this.setState({
			...this.state,
			warning: "",
		});
		return true;
	};

	_addExpenditure = (expenditure) => {
		if (this._validateExpenditure(expenditure)) {
			expenditure.spent = +expenditure.spent;
			this.props.addExpenditure(expenditure);
			this.props.closeModal();
		}
	};

	_closeModal = () => {
		this.props.closeModal();
	};

	render() {
		return (
			<Modal animationType='fade' transparent={true}>
				<View style={styles.modal}>
					<View style={styles.modalView}>
						<Text style={styles.text}>Title:</Text>
						<TextInput
							style={styles.modalInput}
							value={this.state.title}
							onChangeText={(text) => {
								this.setState({
									...this.state,
									form: { ...this.state.form, title: text },
								});
							}}
						/>
						<Text style={styles.text}>Money spent:</Text>
						<TextInput
							style={styles.modalInput}
							value={this.state.spent}
							keyboardType='numeric'
							onChangeText={(text) => {
								this.setState({
									...this.state,
									form: { ...this.state.form, spent: text },
								});
							}}
						/>
						<View style={styles.buttonContainer}>
							<Pressable
								style={styles.pressable}
								onPress={() => {
									this._addExpenditure(this.state.form);
								}}>
								<Text style={styles.pressableText}>Add</Text>
							</Pressable>
							<Pressable
								style={styles.cancelPressable}
								onPress={() => {
									this._closeModal();
								}}>
								<Text style={styles.pressableText}>Cancel</Text>
							</Pressable>
						</View>
						{!!this.state.warning && (
							<Text style={styles.badText}>Warning: {this.state.warning}</Text>
						)}
					</View>
				</View>
			</Modal>
		);
	}
}
