/** @format */

import { combineReducers } from "redux";

import {
	LOG_IN,
	DROP_TOKEN,
	ADD_EXPENDITURE,
	REMOVE_EXPENDITURE,
	RESET_EXPENDITURES,
} from "./actions";

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

const expenditureReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_EXPENDITURE:
			return [...state, action.payload];
		case REMOVE_EXPENDITURE:
			return state.filter((item) => item.id !== action.payload);
		case RESET_EXPENDITURES:
			return [];
		default:
			return state;
	}
};

const idGenerateReducer = (state = 0, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const reducer = combineReducers({
	token: tokenReducer,
	expenditures: expenditureReducer,
	idgen: idGenerateReducer,
});

export default reducer;
