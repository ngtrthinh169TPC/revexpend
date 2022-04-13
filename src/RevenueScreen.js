/** @format */

import React from "react";
import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { connect } from "react-redux";

import { addRevenue, removeRevenue, resetRevenues } from "../redux/actions";

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
});

class RevenueScreen extends React.Component {
	_addRevenue = (revenue) => {
		this.props.addRevenue(revenue);
	};

	_removeRevenue = (revenueId) => {
		this.props.removeRevenue(revenueId);
	};

	_resetRevenues = () => {
		this.props.resetRevenues();
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Total gain: {this.props.revenues.totalGain}</Text>
				<View style={styles.buttonContainer}>
					<Pressable
						style={styles.pressable}
						onPress={() =>
							this._addRevenue({
								id: this.props.revenues.revenueList.length + 1,
								title: "new exp",
								gain: 110,
							})
						}>
						<Text style={styles.pressableText}>Add Revenue</Text>
					</Pressable>
					<Pressable
						style={styles.pressable}
						onPress={() => this._resetRevenues()}>
						<Text style={styles.pressableText}>Reset Revenues</Text>
					</Pressable>
				</View>
				<ScrollView>
					{this.props.revenues.revenueList.map((item) => (
						<View style={styles.item} key={item.id}>
							<Text style={styles.itemText}>{item.id}</Text>
							<Text style={styles.itemText}>Title: {item.title}</Text>
							<Text style={styles.itemText}>Gain: {item.gain}</Text>
							<Pressable
								style={styles.itemRemove}
								onPress={() => this._removeRevenue(item.id)}>
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
	revenues: state.revenues,
	token: state.token,
});

export default connect(mapStateToProps, {
	addRevenue,
	removeRevenue,
	resetRevenues,
})(RevenueScreen);
