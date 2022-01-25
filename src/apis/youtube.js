import axios from 'axios';

const KEY = 'AIzaSyCsOzcOcryJ2M4GmGwi7znf_KhOKbd2E4o';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5 ,
        key : KEY
    }
})