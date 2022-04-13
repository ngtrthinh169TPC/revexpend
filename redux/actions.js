/** @format */

import axios from "axios";

export const LOG_IN = "LOG_IN";
export const DROP_TOKEN = "DROP_TOKEN";
export const ADD_EXPENDITURE = "ADD_EXPENDITURE";
export const REMOVE_EXPENDITURE = "REMOVE_EXPENDITURE";
export const RESET_EXPENDITURES = "RESET_EXPENDITURES";
export const ADD_REVENUE = "ADD_REVENUE";
export const REMOVE_REVENUE = "REMOVE_REVENUE";
export const RESET_REVENUES = "RESET_REVENUES";

export const login = (username, password) => async (dispatch) => {
	try {
		const response = await axios.post("http://192.168.0.105:8000", {
			username: username,
			password: password,
		});
		dispatch({ type: LOG_IN, payload: response.data.token });
	} catch (err) {
		console.log(err);
	}
};

export const dropToken = () => (dispatch) => {
	dispatch({
		type: DROP_TOKEN,
	});
};

export const addExpenditure = (newExpenditure) => (dispatch) => {
	dispatch({
		type: ADD_EXPENDITURE,
		payload: newExpenditure,
	});
};

export const removeExpenditure = (expenditureId) => (dispatch) => {
	dispatch({
		type: REMOVE_EXPENDITURE,
		payload: expenditureId,
	});
};

export const resetExpenditures = () => (dispatch) => {
	dispatch({
		type: RESET_EXPENDITURES,
	});
};

export const addRevenue = (newRevenue) => (dispatch) => {
	dispatch({
		type: ADD_REVENUE,
		payload: newRevenue,
	});
};

export const removeRevenue = (revenueId) => (dispatch) => {
	dispatch({
		type: REMOVE_REVENUE,
		payload: revenueId,
	});
};

export const resetRevenues = () => (dispatch) => {
	dispatch({
		type: RESET_REVENUES,
	});
};
