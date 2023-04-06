import { Badge, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FavouritesIndicator = () => {
	const navigate = useNavigate();

	const favouritesLength = useSelector((state) => state.favourites.content.length);

	return (
		<div className="text-end mt-3 mb-4">
			<Button className="d-inline-flex align-items-center py-2 px-3 bg-light border-info text-info" onClick={() => navigate('/favourites')}>
				Favourite Jobs {''}
				<Badge className="m-3 bg-info text-light rounded-5 px-2">{favouritesLength}</Badge>
			</Button>
		</div>
	);
};

export default FavouritesIndicator;
