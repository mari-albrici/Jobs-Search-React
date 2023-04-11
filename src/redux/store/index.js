import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainReducer from '../reducer';
import companyReducer from '../reducer/companyjobs';
import jobsReducer from '../reducer/jobs';

const rootReducer = combineReducers({
	favourites: mainReducer,
	jobs: jobsReducer,
	companyjobs: companyReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
