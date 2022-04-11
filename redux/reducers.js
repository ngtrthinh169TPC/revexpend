/** @format */

import { combineReducers } from "redux";

import {
	LOG_IN,
	DROP_TOKEN,
	ADD_EXPENDITURE,
	REMOVE_EXPENDITURE,
} from "./actions";

const expenditureReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_EXPENDITURE:
			return [...state, action.payload];
		case REMOVE_EXPENDITURE:
			return state.filter((item) => item.id !== action.payload);
		default:
			return state;
	}
};

const tokenReducer = (state = {}, action) => {
	switch (action.type) {
		case LOG_IN:
			return { ...state, token: action.payload };
		case DROP_TOKEN: {
			return { ...state, token: null };
		}
		default:
			return state;
	}
};

const reducer = combineReducers({
	token: tokenReducer,
	expenditures: expenditureReducer,
});

export default reducer;
