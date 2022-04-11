/** @format */

import "react-native-gesture-handler";

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import RevenueScreen from "./src/RevenueScreen";
import ExpenditureScreen from "./src/ExpenditureScreen";
import LoginScreen from "./src/LoginScreen";
import ShowTokenScreen from "./src/ShowToken";

const ScreenOne = () => {
	return (
		<Stack.Navigator>
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
					<Tab.Navigator>
						<Tab.Screen name='ScreenOne' component={ScreenOne} />
						<Tab.Screen name='RevenueScreen' component={RevenueScreen} />
						<Tab.Screen
							name='ExpenditureScreen'
							component={ExpenditureScreen}
						/>
					</Tab.Navigator>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
}
