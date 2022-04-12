/** @format */

import React from "react";
import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
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
});

class ExpenditureScreen extends React.Component {
	_addExpenditure = (expenditure) => {
		this.props.addExpenditure(expenditure);
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
				<Pressable
					style={styles.pressable}
					onPress={() =>
						this._addExpenditure({
							id: this.props.expenditures.length + 1,
							title: "new exp",
							spent: 200,
						})
					}>
					<Text style={styles.pressableText}>Add Expenditure</Text>
				</Pressable>
				<Pressable
					style={styles.pressable}
					onPress={() => this._resetExpenditures()}>
					<Text style={styles.pressableText}>Reset Expenditures</Text>
				</Pressable>
				<ScrollView>
					{this.props.expenditures.map((item) => (
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
