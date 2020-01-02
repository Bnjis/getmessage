import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function UserCard(props) {
	//   const [count, setCount] = useState(0);
	const userClass = props.seePrivate ? 'admin' : '';
	return (
		<div className={`item item--user ${userClass}`}>
			<img src="https://thewallpaper.co/wp-content/uploads/2016/02/cute-beagle-dog-full-hd-wallpaper-images-new-best-desktop-background-download-free-cute-doggy-puffy-dogs-1600x1200-768x576.jpg" alt=""/>
			<div className="infos">
				<span>{props.first_name} {props.last_name}</span>
			</div>
		</div>
	);
}

UserCard.propTypes = {
	first_name: PropTypes.string.isRequired,
	last_name: PropTypes.string.isRequired,
	seePrivate: PropTypes.bool.isRequired,
}

  export default UserCard;