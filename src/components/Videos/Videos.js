import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({ url }) => {
  return (
    <ReactPlayer
      playing
      light
      controls
      url={`https://www.youtube.com/watch?v=${url}`}
    />
  );
};

export default Video;
