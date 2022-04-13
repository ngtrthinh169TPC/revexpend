/** @format */

import React from "react";
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Pressable,
	TextInput,
} from "react-native";
import { connect } from "react-redux";

import {
	addExpenditure,
	removeExpenditure,
	resetExpenditures,
} from "../redux/actions";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonContainer: {
		flexDirection: "row",
	},
	item: {
		backgroundColor: "#fdfdff",
		padding: 10,
		margin: 10,
		width: 200,
		borderColor: "#46f",
		borderWidth: 2,
		borderRadius: 10,
	},
	itemText: {
		color: "#000",
	},
	itemRemove: {
		backgroundColor: "#f77",
		alignItems: "center",
		justifyContent: "center",
		height: 24,
		width: 72,
		borderRadius: 5,
	},
	itemRemoveText: {
		color: "#fff",
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
	modalInput: {
		width: 240,
		height: 24,
		margin: 5,
		borderWidth: 1,
		padding: 5,
	},
});

class ExpenditureScreen extends React.Component {
	state = {
		showModal: false,
		newExpenditure: {
			title: "",
			spent: "",
		},
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

	_onChangeTitle = (text) => {
		this.setState({
			...this.state,
			newExpenditure: { ...this.state.newExpenditure, title: text },
		});
	};

	_onChangeSpent = (text) => {
		this.setState({
			...this.state,
			newExpenditure: { ...this.state.newExpenditure, spent: text },
		});
	};

	_showModal = () => {
		this.setState({
			...this.state,
			showModal: true,
		});
	};

	_hideModal = () => {
		this.setState({
			showModal: false,
			newExpenditure: {
				title: "",
				spent: "",
			},
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Total spent: {this.props.expenditures.totalSpent}</Text>
				<View style={styles.buttonContainer}>
					<Pressable style={styles.pressable} onPress={this._showModal}>
						<Text style={styles.pressableText}>Add Expenditure</Text>
					</Pressable>
					<Pressable
						style={styles.pressable}
						onPress={() => {
							this._showModal();
							this._resetExpenditures();
						}}>
						<Text style={styles.pressableText}>Reset Expenditures</Text>
					</Pressable>
				</View>
				{this.state.showModal ? (
					<>
						<Text>Title:</Text>
						<TextInput
							style={styles.modalInput}
							value={this.state.newExpenditure.title}
							onChangeText={(text) => {
								this._onChangeTitle(text);
							}}
						/>
						<Text>Money spent:</Text>
						<TextInput
							style={styles.modalInput}
							value={this.state.newExpenditure.spent}
							keyboardType='numeric'
							onChangeText={(text) => {
								this._onChangeSpent(text);
							}}
						/>
						<Pressable
							style={styles.pressable}
							onPress={() => {
								this._addExpenditure(this.state.newExpenditure);
								this._hideModal();
							}}>
							<Text style={styles.pressableText}>Add</Text>
						</Pressable>
					</>
				) : (
					<></>
				)}
				<ScrollView>
					{this.props.expenditures.expenditureList.map((item) => (
						<View style={styles.item} key={item.id}>
							<Text style={styles.itemText}>{item.id}</Text>
							<Text style={styles.itemText}>Title: {item.title}</Text>
							<Text style={styles.itemText}>Spent: {item.spent}</Text>
							<Pressable
								style={styles.itemRemove}
								onPress={() => this._removeExpenditure(item.id)}>
								<Text style={styles.itemRemoveText}>remove</Text>
							</Pressable>
						</View>
					))}
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
