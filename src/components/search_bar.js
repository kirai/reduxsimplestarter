import React, { Component } from 'react'
// extends React.Component -> but I moved it to { Component }

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: 'starting value' };
	}

	render() {
		return ( 
			<div className="search_bar">
				<input 
					value = {this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;