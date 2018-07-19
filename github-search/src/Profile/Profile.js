import React from 'react';
import './Profile.css';

const profile = (props) => {
	return (
		<div className="profile">
			<table className={props.class}>
				<tbody>
					<tr>
						<th>Login</th>
						<td>{props.login}</td>
					</tr>
					<tr>
						<th>Id</th>
						<td>{props.id}</td>
					</tr>
					<tr>
						<th>My Repositories</th>
						<td>{props.repos}</td>
					</tr>
					<tr>
						<th>My score</th>
						<td>{props.score}</td>
					</tr>
					<tr>
						<th>Subscribe Me at:</th>
						<td><a href={props.subscribe}>{props.subscribe}</a></td>
					</tr>
					<tr>
						<th>Follow me on my github:</th>
						<td><a href={props.url}>{props.url}</a></td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default profile;
