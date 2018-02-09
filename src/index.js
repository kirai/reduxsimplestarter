import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";

// Create a new component. 
// This component will produce HTML
// MAKE the component
const App = () => {
	return (
	<div>
		<SearchBar />
	</div>
	);
}

// Take this component's generated HTML and put it on the DOM
// SHOW it

ReactDOM.render(<App />, document.querySelector('.container'));