import React, { useState } from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import { Grid } from "@material-ui/core";

const VideoBrowser = () => {

    const [videoInfo, setVideoInfo] = useState([]);
    const [videoId, setVideoId] = useState({ id: {}, snippet: {} });

    const searchHandler = async keyword => {
        const { data: { items: videos }} = await youtube.get("/search", {
            params: {
                q:keyword
            }
        })
        setVideoInfo(videos);
        setVideoId(videos[0]);
        console.log(keyword);
    };

    if (!videoId.id.videoId) {
        searchHandler('konj');
    }

    return (
        <Grid style={{ justifyContent: "center", marginTop: "70px" }} container spacing={10}>
            <Grid item xs={11}>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                        <SearchBar videoId={videoId} searchHandler={searchHandler} videoInfo={videoInfo} />
                    </Grid>
                    <Grid item xs={8}>
                        <VideoDetail video={videoId} videoInfo={videoInfo} />
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList key={videoId.id.videoId} videoInfo={videoInfo} videoSelect={setVideoId} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
    
}

export default VideoBrowser;