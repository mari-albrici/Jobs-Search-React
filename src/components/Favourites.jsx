import { Col, Row, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Favourites = () => {
	const favourites = useSelector((state) => state.favourites.content);
	console.log(favourites);

	return (
		<Row>
			<Col>
				{favourites.length > 0 &&
					favourites.map((favourite) => (
						<>
							<ListGroup.Item key={favourite.id}>
								<h2>{favourite.title}</h2>
							</ListGroup.Item>
						</>
					))}
			</Col>
		</Row>
	);
};

export default Favourites;
