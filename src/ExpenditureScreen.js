/** @format */

import React from "react";
import { Text, View, ScrollView, Pressable } from "react-native";
import { connect } from "react-redux";

import { removeExpenditure, resetExpenditures } from "../redux/actions";

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

class ExpenditureScreen extends React.Component {
	state = {
		showModal: false,
	};

	_removeExpenditure = (expenditureId) => {
		this.props.removeExpenditure(expenditureId);
	};

	_resetExpenditures = () => {
		this.props.resetExpenditures();
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={[styles.totalText, styles.text]}>
					Total spent: {this.props.expenditures.totalSpent}
				</Text>
				<View style={styles.buttonContainer}>
					<Pressable
						style={styles.pressable}
						onPress={() =>
							this.props.navigation.navigate("AddExpenditureScreen")
						}>
						<Text style={styles.pressableText}>Add Expenditure</Text>
					</Pressable>
					<Pressable
						style={styles.pressable}
						onPress={() => {
							this._resetExpenditures();
						}}>
						<Text style={styles.pressableText}>Reset Expenditures</Text>
					</Pressable>
				</View>
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
	removeExpenditure,
	resetExpenditures,
})(ExpenditureScreen);
