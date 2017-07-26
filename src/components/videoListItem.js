import React, { Component } from 'react'


  function VideoListItem( {video, onVideoSelect} ){   //instead of doing props.video and props.onVideoSelect, es6 way
      // console.log(video)


    const imageUrl = video.snippet.thumbnails.default.url;


    return (
      // const video = props.video    non es6 way

      <li onClick={ () => onVideoSelect(video) }className="list-group-item">
        <div className="video-list media">
            <div className = "media-left">
              <img className = 'media-object' src={imageUrl}  />
            </div>

            <div className="media-body">
                <div className="media-heading"> {video.snippet.title} </div>
            </div>
        </div>
      </li>
    );
  };



export default VideoListItem;
