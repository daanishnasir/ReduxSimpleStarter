import React, {Component} from 'react';


import VideoListItem from './videoListItem'





const VideoList = (props) => {

  const videoItems = props.videos.map( video => {

    return <VideoListItem
       onVideoSelect = {props.onVideoSelect}
       key={video.etag}
       video = {video} /> //each li needs a key, we have a 'etag' on the data to represent each id
  })

  return (
    <ul className="col-md-4 list-group">
        {videoItems}
    </ul>
  );

}


export default VideoList;
