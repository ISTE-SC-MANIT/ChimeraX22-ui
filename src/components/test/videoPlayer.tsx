import ReactPlayer from 'react-player';
import React from 'react';
import { Grid } from '@mui/material';

interface VideoProps {
  src: string;
}
const VideoPlayer: React.FC<VideoProps> = ({ src }) => {
  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <ReactPlayer url={src} controls={true} width={'80%'} height='200px' />
      </Grid>
    </>
  );
};

export default VideoPlayer;
