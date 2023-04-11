export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';

export const ADD_TO_JOBS = 'ADD_TO_JOBS';

export const getJobsAction = (dispatch, query) => {
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

export const getCompanyAction = (companyName) => {
	return async (dispatch, e) => {
		e.preventDefault();

		try {
			const response = await fetch('https://strive-benchmark.herokuapp.com/api/jobs?company=' + companyName);
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
