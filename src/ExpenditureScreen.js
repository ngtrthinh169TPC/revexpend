/** @format */

import React from "react";
import { Text, View, ScrollView, Pressable, TextInput } from "react-native";
import { connect } from "react-redux";

import {
	addExpenditure,
	removeExpenditure,
	resetExpenditures,
} from "../redux/actions";

import styles from "./screen.styles";

const ExpenditureListItem = (item, onRemove) => {
	return (
		<View style={styles.item} key={item.id}>
			<Text style={styles.itemText}>{item.id}</Text>
			<Text style={styles.itemText}>Title: {item.title}</Text>
			<Text style={styles.itemText}>Spent: {item.spent}</Text>
			<Pressable style={styles.itemRemove} onPress={() => onRemove(item.id)}>
				<Text style={styles.itemRemoveText}>remove</Text>
			</Pressable>
		</View>
	);
};

class ModalNewExpenditure extends React.Component {
	state = {
		title: "",
		spent: "",
	};

	render() {
		return (
			<>
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
							this.props.addExpenditure(this.state);
							this.props.hideModal();
						}}>
						<Text style={styles.pressableText}>Add</Text>
					</Pressable>
					<Pressable
						style={styles.cancelPressable}
						onPress={() => {
							this.props.hideModal();
						}}>
						<Text style={styles.pressableText}>Cancel</Text>
					</Pressable>
				</View>
			</>
		);
	}
}

class ExpenditureScreen extends React.Component {
	state = {
		showModal: false,
	};

	_addExpenditure = (expenditure) => {
		if (
			expenditure.title.length > 0 &&
			expenditure.spent.length > 0 &&
			+expenditure.spent > 0
		) {
			expenditure.spent = +expenditure.spent;
			this.props.addExpenditure(expenditure);
		} else {
			console.log("invalid form");
		}
	};

	_removeExpenditure = (expenditureId) => {
		this.props.removeExpenditure(expenditureId);
	};

	_resetExpenditures = () => {
		this.props.resetExpenditures();
	};

	_showModal = () => {
		this.setState({
			showModal: true,
		});
	};

	_hideModal = () => {
		this.setState({
			showModal: false,
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={[styles.totalText, styles.text]}>
					Total spent: {this.props.expenditures.totalSpent}
				</Text>
				<View style={styles.buttonContainer}>
					<Pressable style={styles.pressable} onPress={this._showModal}>
						<Text style={styles.pressableText}>Add Expenditure</Text>
					</Pressable>
					<Pressable
						style={styles.pressable}
						onPress={() => {
							this._hideModal();
							this._resetExpenditures();
						}}>
						<Text style={styles.pressableText}>Reset Expenditures</Text>
					</Pressable>
				</View>
				{this.state.showModal && (
					<ModalNewExpenditure
						hideModal={this._hideModal}
						addExpenditure={this._addExpenditure}
					/>
				)}
				<ScrollView>
					{this.props.expenditures.expenditureList.map((item) =>
						ExpenditureListItem(item, this._removeExpenditure)
					)}
				</ScrollView>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	expenditures: state.expenditures,
	token: state.token,
});

export default connect(mapStateToProps, {
	addExpenditure,
	removeExpenditure,
	resetExpenditures,
})(ExpenditureScreen);
