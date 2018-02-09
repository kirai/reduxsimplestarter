import React, { Component } from 'react'
// extends React.Component -> but I moved it to { Component }

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: 'starting value' };
	}

	render() {
		return ( 
			<div>
				<input 
					value = {this.state.term}
					onChange={event => this.setState({ term: event.target.value})} />
			</div>
		);
	}
}

/* Event handler
onInputChange(event) {
console.log(event.target.value);
}

functional based component
const SearchBar = () => {
	return <input />;
};*/

export default SearchBar;
