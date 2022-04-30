/** @format */

import React from "react";
import { Text, View, Pressable, Modal, TextInput } from "react-native";

import styles from "../screen.styles";

export default class AddRevenueModal extends React.Component {
	state = {
		form: {
			title: "",
			gain: "",
		},
		warning: "",
	};

	_validateRevenue = (revenue) => {
		if (revenue.title.length <= 0) {
			this.setState({ ...this.state, warning: "Please fill in your title" });
			return false;
		}
		if (revenue.gain.length <= 0) {
			this.setState({
				...this.state,
				warning: "Please fill in your gain amount",
			});
			return false;
		}
		if (+revenue.gain <= 0) {
			this.setState({
				...this.state,
				warning: "Please choose a valid gain amount",
			});
			return false;
		}
		this.setState({
			...this.state,
			warning: "",
		});
		return true;
	};

	_addRevenue = (revenue) => {
		if (this._validateRevenue(revenue)) {
			revenue.gain = +revenue.gain;
			this.props.addRevenue(revenue);
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
						<Text style={styles.text}>Money gain:</Text>
						<TextInput
							style={styles.modalInput}
							value={this.state.gain}
							keyboardType='numeric'
							onChangeText={(text) => {
								this.setState({
									...this.state,
									form: { ...this.state.form, gain: text },
								});
							}}
						/>
						<View style={styles.buttonContainer}>
							<Pressable
								style={styles.pressable}
								onPress={() => {
									this._addRevenue(this.state.form);
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
