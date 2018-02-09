import React from 'react';
//the multiple properties off of the props object just separated with a comma.
const VideoListItem = ({video, onVideoSelect}) =>{
  const imagUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imagUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>

    </li>
  )

};

export default VideoListItem;
