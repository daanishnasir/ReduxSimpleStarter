import React, { Component } from 'react'



const VideoDetail = ( {video} ) => {


//state originally has no videos. Takes a second to load newState

  if (!video) {
    return (
      <div> Loading... </div>
      );
  }


console.log( {video})
const videoId = video.id.videoId;
const url = `https://www.youtube.com/embed/${videoId}`

console.log('videoId:', videoId)
console.log('the url:', url)

return (
  <div className="video-detail col-md-8">
    <div className = "embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={url}>  </iframe>
    </div>
      <div className="details">
        <div> {video.snippet.title}</div>
        <br/>
        <div> {video.snippet.description}</div>
      </div>
  </div>
)

}


export default VideoDetail;
