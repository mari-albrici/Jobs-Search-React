import { Col, Row, ListGroup, Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Favourites = () => {
	const favourites = useSelector((state) => state.favourites.content);
	console.log(favourites);
	const dispatch = useDispatch();

	return (
		<>
			<Container className="m-3">
				<h2>Your favourite jobs:</h2>
				<Row>
					<Col>
						{favourites.length > 0 &&
							favourites.map((favourite, i) => (
								<>
									<ListGroup.Item key={favourite._id} className="d-flex justify-content-between">
										<Container>
											<Link to={`/${favourite.company_name}`}>
												<h5>{favourite.company_name}</h5>
											</Link>
											<Link to={`/${favourite.url}`}>{favourite.title}</Link>
										</Container>
										<Container>
											<Button
												className="bg-danger border-danger"
												onClick={() => {
													dispatch({ type: 'REMOVE_FROM_FAVOURITES', payload: i });
												}}
											>
												{' '}
												DELETE{' '}
											</Button>
										</Container>
									</ListGroup.Item>
								</>
							))}
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Favourites;
