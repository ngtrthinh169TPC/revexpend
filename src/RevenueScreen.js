/** @format */

import React from "react";
import { Text, View, ScrollView, Pressable } from "react-native";
import { connect } from "react-redux";

import { addRevenue, removeRevenue, resetRevenues } from "../redux/actions";

import styles from "./screen.styles";

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
				<Text style={[styles.totalText, styles.text]}>
					Total gain: {this.props.revenues.totalGain}
				</Text>
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
