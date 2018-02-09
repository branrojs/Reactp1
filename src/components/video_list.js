import React from 'react';
import VideoListItem from './video_list_item';

//function base component
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    //a propertie of video is etag, a key take it from the json API responses
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};


export default VideoList;
