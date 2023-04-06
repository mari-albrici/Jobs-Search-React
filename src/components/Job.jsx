import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Job = ({ data }) => {
	const dispatch = useDispatch();

	return (
		<Row className="mx-0 mt-3 p-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
			<Col xs={3} className="d-flex justify-content-between">
				<Link to={`/${data.company_name}`}>{data.company_name}</Link>
			</Col>
			<Col xs={6}>
				<a href={data.url} target="_blank" rel="noreferrer">
					{data.title}
				</a>
			</Col>
			<Col xs={3}>
				<Button
					className="bg-light border-info text-info"
					onClick={() => {
						dispatch({ type: 'ADD_TO_FAVOURITES', payload: data });
					}}
				>
					Add to favourites
				</Button>
			</Col>
		</Row>
	);
};

export default Job;
