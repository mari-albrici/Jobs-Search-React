import { Container, Row, Col } from 'react-bootstrap';
import Job from './Job';
import { getCompanyJobs } from '../redux/actions/';
import { useDispatch, useSelector } from 'react-redux';

const CompanySearchResults = () => {
	const dispatch = useDispatch();

	getCompanyJobs(dispatch);
	const companyJobs = useSelector((state) => state.companyJobs);

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
