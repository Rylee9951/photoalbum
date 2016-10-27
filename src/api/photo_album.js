import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8001/'

export function getAlbums(){
	return axios.get("Albums")
}