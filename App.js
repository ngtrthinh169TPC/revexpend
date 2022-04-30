/** @format */

import "react-native-gesture-handler";

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import Icon from "react-native-vector-icons/FontAwesome";

import RevenueScreen from "./src/RevenueScreen/RevenueScreen";
import ExpenditureScreen from "./src/ExpenditureScreen/ExpenditureScreen";
import LoginScreen from "./src/LoginScreen";
import TokenScreen from "./src/TokenScreen";
import BalanceScreen from "./src/BalanceScreen";

const Authentication = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='TokenScreen' component={TokenScreen} />
			<Stack.Screen name='LoginScreen' component={LoginScreen} />
		</Stack.Navigator>
	);
};

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer>
					<Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#000" }}>
						<Tab.Screen
							name='Authentication'
							component={Authentication}
							options={{
								tabBarIcon: ({ color, size }) => (
									<Icon name='home' color={color} size={size} />
								),
								headerStyle: { backgroundColor: "#bdd" },
							}}
						/>
						<Tab.Screen
							name='BalanceScreen'
							component={BalanceScreen}
							options={{
								tabBarLabel: "Balance",
								tabBarIcon: ({ color, size }) => (
									<Icon name='balance-scale' color={color} size={size} />
								),
								headerStyle: { backgroundColor: "#fe9" },
							}}
						/>
						<Tab.Screen
							name='RevenueScreen'
							component={RevenueScreen}
							options={{
								tabBarLabel: "Revenue",
								tabBarIcon: ({ color, size }) => (
									<Icon name='money' color={color} size={size} />
								),
								headerStyle: { backgroundColor: "#7fb" },
							}}
						/>
						<Tab.Screen
							name='ExpenditureScreen'
							component={ExpenditureScreen}
							options={{
								tabBarLabel: "Expenditure",
								tabBarIcon: ({ color, size }) => (
									<Icon name='shopping-cart' color={color} size={size} />
								),
								headerStyle: { backgroundColor: "#7df" },
							}}
						/>
					</Tab.Navigator>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
}
