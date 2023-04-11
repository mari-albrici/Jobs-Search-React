import { ADD_TO_COMPANY_JOBS } from '../actions';

const initialState = {
	content: [],
};

const companyReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_COMPANY_JOBS:
			return {
				...state,
				content: action.payload,
			};
		default:
			return state;
	}
};

export default companyReducer;
