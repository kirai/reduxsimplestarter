import React, { Component } from 'react'

// extends React.Component -> but I moved it to { Component }

class SearchBar extends Component {
	render() {
		return <input onChange={this.onInputChange} />;
	}

	// Event handler
	onInputChange(event) {
		console.log(event.target.value);
	}
}

/*
↑class based component↑

functional based component
const SearchBar = () => {
	return <input />;
};*/

export default SearchBar;
