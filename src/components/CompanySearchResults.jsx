import { Container, Row, Col } from 'react-bootstrap';
import Job from './Job';
import { getCompanyAction } from '../redux/actions/';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const CompanySearchResults = () => {
	const params = useParams();
	const companyJobs = useSelector((state) => state.companyJobs.content);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCompanyAction(params.companyName));
	});
	return (
		<Container>
			<Row>
				<Col>
					{companyJobs.map((companyJob) => (
						<Job key={companyJob._id} data={companyJob} />
					))}
				</Col>
			</Row>
		</Container>
	);
};

export default CompanySearchResults;
