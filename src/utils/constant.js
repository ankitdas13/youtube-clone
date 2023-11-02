const API_KEY = import.meta.env.VITE_API_KEY

export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=in&key="+API_KEY+"&maxResults="

export const YOUTUBE_SEARCH = "http://localhost:4001/search?query="

export const YOUTUBE_VIDEO_SEARCH = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=15&key="+API_KEY+"&q="

export const YOUTUBE_PARENT_COMMENTS = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key="+API_KEY+"&videoId="

export const YOUTUBE_VIDEO_DETAILS = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+API_KEY+"&id="

export const YOUTUBE_CHANNELS = "https://youtube-search-and-download.p.rapidapi.com/channel/about?id="

export const MAX_RESULT = "15"

export const DARK_MODE_CODE = "#0f0f0f"