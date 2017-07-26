//components are snippets of code that produce html. React is just multiple components //Components:  Collection of javascript functions that produce html.
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';   // To render to the DOM
import YTSearch from 'youtube-api-search'
import VideoDetail from './components/videoDetail'


import SearchBar from './components/searchBar';
import VideoList from './components/videoList'
//Create a new component. This component should produce some html

const API_KEY = 'AIzaSyDffHwnLihr4XxNFoMTo8sPdKBHqQTrUjs'




class App extends Component {

  constructor(props) {
     super(props);

     this.state = {
        videos: [],
        selectedVideo: null
     };

    this.videoSearch('surfboards')



   }

//define callback
videoSearch(term) {

  YTSearch ({key: API_KEY, term: term } , (videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      })
  }); //videos can be called anything, its like response

}

  render(){

const videoSearch = _.debounce( term => { this.videoSearch(term) }, 300)


    return  (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>   //This JSX will be turned into HTML
    );

  }
}

//const App =  () => <div> Hi! </div>;   //This JSX will be turned into HTML





//Take this component's generated HTML and put it on the page ( in the DOM )
ReactDOM.render(<App />, document.querySelector('.container')) //were you wanna render it to? Where you wanna insert this at?);


//to make an instance just wrap it into JSX tags and you're good to go <App />
