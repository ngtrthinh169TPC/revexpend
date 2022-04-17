/** @format */

import React from "react";
import { Text, View, ScrollView, Pressable } from "react-native";
import { connect } from "react-redux";

import { addRevenue, removeRevenue, resetRevenues } from "../redux/actions";

import styles from "./screen.styles";

const RevenueListItem = (item, onRemove) => {
	return (
		<View style={styles.item} key={item.id}>
			<Text style={styles.itemText}>{item.id}</Text>
			<Text style={styles.itemText}>Title: {item.title}</Text>
			<Text style={styles.itemText}>Gain: {item.gain}</Text>
			<Pressable style={styles.itemRemove} onPress={() => onRemove(item.id)}>
				<Text style={styles.itemRemoveText}>remove</Text>
			</Pressable>
		</View>
	);
};

class RevenueScreen extends React.Component {
	state = {
		showModal: false,
	};

	_addRevenue = (revenue) => {
		if (
			revenue.title.length > 0 &&
			revenue.gain.length > 0 &&
			+revenue.gain > 0
		) {
			revenue.gain = +revenue.gain;
			this.props.addRevenue(revenue);
		} else {
			console.log("invalid form");
		}
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
				<Text style={[styles.totalText, styles.text]}>
					Total gain: {this.props.revenues.totalGain}
				</Text>
				<View style={styles.buttonContainer}>
					<Pressable
						style={styles.pressable}
						onPress={() => this.props.navigation.navigate("AddRevenueScreen")}>
						<Text style={styles.pressableText}>Add Revenue</Text>
					</Pressable>
					<Pressable
						style={styles.pressable}
						onPress={() => {
							this._resetRevenues();
						}}>
						<Text style={styles.pressableText}>Reset Revenues</Text>
					</Pressable>
				</View>
				<ScrollView>
					{this.props.revenues.revenueList.map((item) =>
						RevenueListItem(item, this._removeRevenue)
					)}
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
