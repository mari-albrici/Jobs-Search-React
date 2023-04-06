import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FavouritesIndicator = () => {
	const navigate = useNavigate();

	const favouritesLength = useSelector((state) => state.favourites.content.length);
	//favouritesLength rispecchierà in qualsiasi momento la lunghezza di state.cart.content

	return (
		<div className="text-end mt-3 mb-4">
			<Button className="d-inline-flex align-items-center py-2 px-3" variant="primary" onClick={() => navigate('/favourites')}>
				FAVS: {''}
				<span className="ms-2">{favouritesLength}</span>
			</Button>
		</div>
	);
};

export default FavouritesIndicator;
