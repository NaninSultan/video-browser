import React from 'react';
import VideoItem from "./VideoItem";
import { Grid } from '@material-ui/core';

const VideoList = ({ videoInfo, videoSelect }) => {
  const listOfVideos = videoInfo.map(video => (
    <VideoItem
      videoSelect={videoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
}

export default VideoList;