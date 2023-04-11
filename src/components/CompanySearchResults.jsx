import { Container, Row, Col } from 'react-bootstrap';
import Job from './Job';
import { getCompanyAction } from '../redux/actions/';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const CompanySearchResults = () => {
	const params = useParams();
	const companyJobs = useSelector((state) => state.companyJobs.content);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCompanyAction(params.companyName));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container>
			<Container className="d-flex justify-content-between">
				<h2>The company's jobs:</h2>
				<Link to={`/`}>HOME</Link>
			</Container>
			{companyJobs.map((companyJob) => (
				<Row key={companyJob._id}>
					<Col>
						<Job data={companyJob} />
					</Col>
				</Row>
			))}
		</Container>
	);
};

export default CompanySearchResults;
