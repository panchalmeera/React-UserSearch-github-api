import React from 'react';
import './GithubSearch.css';

const githubSearch = (props) => {
	return <input type="search" className="searchBox" onChange={props.changed} placeholder="Search Github User here.."/>
}

export default githubSearch;
