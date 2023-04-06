import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Job = ({ data }) => {
	const dispatch = useDispatch();
	const favourites = useSelector((state) => state.favourites.content);

	return (
		<Row className="mx-0 mt-3 p-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
			<Col xs={3}>
				<Link to={`/${data.company_name}`}>{data.company_name}</Link>
				<Button
					onClick={() => {
						dispatch({ type: 'ADD_TO_FAVOURITES', payload: favourites });
					}}
				>
					Add to favourites
				</Button>
			</Col>
			<Col xs={9}>
				<a href={data.url} target="_blank" rel="noreferrer">
					{data.title}
				</a>
			</Col>
		</Row>
	);
};

export default Job;
