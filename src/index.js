import _ from 'lodash';
import React, { Component } from 'react';  // {} is to import an inner component from that module (not the one exported as default).
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDT0LuLHFGC_kavOYDJ062LUej9JUK0fQI';

// Main component as a function.
// const App = (props) => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     );
// }

// Main component as a class.
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
         };

         this.videoSearch('snowboard');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            // this.setState({ videos });  // Syntactic sugar for: { videos: videos }.
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
             });
        });
    }

    render() {
        // Throttle the search by 1 sec.
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 1000);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />  {/* STATES are passed down to components as PROPS */}
            </div>
        );
    }
}

// Take this component's generated HTML and put it in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
