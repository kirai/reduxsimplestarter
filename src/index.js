import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
	console.log(data);
});

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { videos: [] };
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos }); // When key and variable name has the same name
									   // Alternative syntax: this.setState({ videos: videos});
		});
	}
	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos = {this.state.videos}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));