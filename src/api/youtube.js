import axios from 'axios';

const KEY = "AIzaSyBS86VPnVuQtFJQcu1fhtambGbDLg6CmsU";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    },
    headers: {}
});