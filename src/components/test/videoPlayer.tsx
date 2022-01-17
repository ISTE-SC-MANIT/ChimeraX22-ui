import ReactPlayer from 'react-player';
import React from 'react';

interface VideoProps {
  src: string;
}
const VideoPlayer: React.FC<VideoProps> = ({ src }) => {
  return (
    <>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        // url={src}
        controls={true}
        width={'100%'}
        height='auto'
      />
    </>
  );
};

export default VideoPlayer;
