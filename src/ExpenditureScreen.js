/** @format */

import React from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import { connect } from "react-redux";

import { addExpenditure, removeExpenditure } from "../redux/actions";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	item: {
		backgroundColor: "#00f",
		padding: 10,
		margin: 10,
		width: 200,
	},
	text: {
		color: "#fff",
	},
});

class ExpenditureScreen extends React.Component {
	_addExpenditure = (expenditure) => {
		this.props.addExpenditure(expenditure);
	};

	_removeExpenditure = (expenditureId) => {
		this.props.removeExpenditure(expenditureId);
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Expenditure Screen</Text>
				<Button
					title='Add Expenditure'
					onPress={() =>
						this._addExpenditure({
							id: this.props.expenditures.length + 1,
							title: "new exp",
							spent: 200,
						})
					}
				/>
				<ScrollView>
					{this.props.expenditures.map((item) => (
						<View style={styles.item} key={item.id}>
							<Text style={styles.text}>{item.id}</Text>
							<Text style={styles.text}>{item.title}</Text>
							<Text style={styles.text}>{item.spent}</Text>
							<Button
								title='remove'
								onPress={() => this._removeExpenditure(item.id)}
							/>
						</View>
					))}
				</ScrollView>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	expenditures: state.expenditures,
});

export default connect(mapStateToProps, { addExpenditure, removeExpenditure })(
	ExpenditureScreen
);
