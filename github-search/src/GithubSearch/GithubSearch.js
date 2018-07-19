import React from 'react';
import './GithubSearch.css';
import {DebounceInput} from 'react-debounce-input';
const githubSearch = (props) => {
	return <DebounceInput
	          minLength={4}
	          debounceTimeout={300}
	          onChange={props.changed}
	          className="searchBox" />
}

export default githubSearch;
