import React from 'react';
import './User.css';

const user = (props) => {
	return (
		<li className="usercard" onClick={props.clicked}>
			{props.login}
		</li>
	)
}

export default user;
