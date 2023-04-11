import { useParams } from 'react-router-dom';

export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';

export const ADD_TO_JOBS = 'ADD_TO_JOBS';

export const getJobs = (dispatch, query) => {
	return async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('https://strive-benchmark.herokuapp.com/api/jobs?search=' + query + '&limit=20');
			if (response.ok) {
				const { data } = await response.json();
				dispatch({ type: ADD_TO_JOBS, payload: data });
			} else {
				alert('Error fetching results');
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const ADD_TO_COMPANY_JOBS = 'ADD_TO_COMPANY_JOBS';

export const getCompanyJobs = (dispatch) => {
	return async (e) => {
		e.preventDefault();
		const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?company=';
		const params = useParams();

		try {
			const response = await fetch(baseEndpoint + params.companyName);
			if (response.ok) {
				const { data } = await response.json();
				dispatch({ type: ADD_TO_COMPANY_JOBS, payload: data });
				console.log(data);
			} else {
				alert('Error fetching results');
			}
		} catch (error) {
			console.log(error);
		}
	};
};
