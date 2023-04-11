import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Job from './Job';
import FavouritesIndicator from './FavouritesIndicator';
import { useDispatch, useSelector } from 'react-redux';
import { getJobsAction } from '../redux/actions';

const MainSearch = () => {
	const dispatch = useDispatch();
	const [query, setQuery] = useState('');
	const jobs = useSelector((state) => state.jobs.content);

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	return (
		<Container>
			<Row>
				<Col xs={10} className="mx-auto my-3">
					<h1>Remote Jobs Search</h1>
					<FavouritesIndicator />
				</Col>
				<Col xs={10} className="mx-auto">
					<Form onSubmit={getJobsAction(dispatch, query)}>
						<Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
					</Form>
				</Col>
				<Col xs={10} className="mx-auto mb-5">
					{jobs.map((job) => (
						<Job key={job._id} data={job} />
					))}
				</Col>
			</Row>
		</Container>
	);
};

export default MainSearch;
