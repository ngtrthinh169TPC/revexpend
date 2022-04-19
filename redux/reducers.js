/** @format */

import { combineReducers } from "redux";

import {
	LOG_IN_SUCCEEDED,
	LOG_IN_FAILED,
	DROP_TOKEN,
	ADD_EXPENDITURE,
	REMOVE_EXPENDITURE,
	RESET_EXPENDITURES,
	ADD_REVENUE,
	REMOVE_REVENUE,
	RESET_REVENUES,
} from "./actions";

const tokenReducer = (state = {}, action) => {
	switch (action.type) {
		case LOG_IN_SUCCEEDED:
			return { ...state, token: action.payload, error: null };
		case LOG_IN_FAILED:
			return { ...state, error: action.payload };
		case DROP_TOKEN: {
			return { ...state, token: null };
		}
		default:
			return state;
	}
};

const expenditureReducer = (
	state = { expenditureList: [], totalSpent: 0, idSeed: 0 },
	action
) => {
	switch (action.type) {
		case ADD_EXPENDITURE: {
			let newTotalSpent = state.totalSpent + action.payload.spent;
			action.payload.id = state.idSeed;
			let newExpenditureList = [...state.expenditureList, action.payload];
			return {
				expenditureList: newExpenditureList,
				totalSpent: newTotalSpent,
				idSeed: state.idSeed + 1,
			};
		}
		case REMOVE_EXPENDITURE: {
			let newTotalSpent =
				state.totalSpent -
				state.expenditureList.find((item) => item.id === action.payload).spent;
			let newExpenditureList = state.expenditureList.filter(
				(item) => item.id !== action.payload
			);
			return {
				expenditureList: newExpenditureList,
				totalSpent: newTotalSpent,
				idSeed: state.idSeed,
			};
		}
		case RESET_EXPENDITURES:
			return { expenditureList: [], totalSpent: 0, idSeed: 0 };
		default:
			return state;
	}
};

const revenueReducer = (
	state = { revenueList: [], totalGain: 0, idSeed: 0 },
	action
) => {
	switch (action.type) {
		case ADD_REVENUE: {
			let newTotalGain = state.totalGain + action.payload.gain;
			action.payload.id = state.idSeed;
			let newRevenueList = [...state.revenueList, action.payload];
			return {
				revenueList: newRevenueList,
				totalGain: newTotalGain,
				idSeed: state.idSeed + 1,
			};
		}
		case REMOVE_REVENUE: {
			let newTotalGain =
				state.totalGain -
				state.revenueList.find((item) => item.id === action.payload).gain;
			let newRevenueList = state.revenueList.filter(
				(item) => item.id !== action.payload
			);
			return {
				revenueList: newRevenueList,
				totalGain: newTotalGain,
				idSeed: state.idSeed,
			};
		}
		case RESET_REVENUES:
			return { revenueList: [], totalGain: 0, idSeed: 0 };
		default:
			return state;
	}
};

const reducer = combineReducers({
	token: tokenReducer,
	expenditures: expenditureReducer,
	revenues: revenueReducer,
});

export default reducer;
