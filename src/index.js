import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//youtube lib search for React
import YTSearch from 'youtube-api-search';
//components imported into the index
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
//const variable with the google developer console api key
const API_KEY='AIzaSyDiGqQ0wCRKJnZg-36kVSjHRJl2l4yORZo';

//declaring a variable const, this is the final value and is not gonna change
//take this componens enerate html and put it on the page in the dom
class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null // we put it in null just to create a variable
		};

		this.videoSearch('pogonyuto');
	}

	videoSearch(term) {

		//refactor the YTsearch metod into its own metod called on videoSearch
		//taking a single term, a string
		YTSearch({
			key: API_KEY, term: term},
			(videos) => {this.setState ({
				videos: videos,
				selectedVideo: videos[0] //set it at the first video
		 	});
		});
	}

	render(){
		//const variable created with a arrow function passed it to debounce
		//debounce takes the inner functions (videosearch) and returns a new functions
		//that can only be called once every 300 milliseconds
		//in a couple of words, videoSearch delayed in a couple of secods
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
		return (
		 <div>
		 		<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
				 	onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
		 </div>
		)
	}
}


ReactDOM.render(<App />, document.querySelector('.container'));
