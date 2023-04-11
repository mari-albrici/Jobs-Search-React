import { ADD_TO_JOBS } from '../actions';

const initialState = {
	content: [],
};

const jobsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_JOBS:
			return {
				...state,
				content: action.payload,
			};
		default:
			return state;
	}
};

export default jobsReducer;
