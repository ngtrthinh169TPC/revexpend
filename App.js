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

import RevenueScreen from "./src/RevenueScreen";
import ExpenditureScreen from "./src/ExpenditureScreen";
import LoginScreen from "./src/LoginScreen";
import ShowTokenScreen from "./src/ShowToken";

const Authentication = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='ShowToken' component={ShowTokenScreen} />
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
					<Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#46f" }}>
						<Tab.Screen
							name='Authentication'
							component={Authentication}
							options={{
								tabBarIcon: ({ color, size }) => (
									<Icon name='home' color={color} size={size} />
								),
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
							}}
						/>
					</Tab.Navigator>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
}
