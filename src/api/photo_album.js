import axios from 'axios'
import store from 'store'

axios.defaults.baseURL = 'http://localhost:8001/'

export function getAlbums(){
	return axios.get("Albums").then(function(resp){
		store.dispatch({
			type: 'GET_ALBUMS',
			albums: resp.data
		})
	})
}

export function getAlbum(albumId){
	return axios.get(`Albums/album${albumId}`).then(function(resp){
		store.dispatch({
			type: 'GET_ALBUMS',
			album: resp.data
		})
	})
}

export function getPhotos(albumId) {
	return axios.get(`photos?albumid=${albumId}`).then(function(resp){
		store.dispatch({
			type: 'GET_PHOTOS',
			photos: resp.data
		})
	})
}

export function getPhoto(Id) {
	return axios.get('photos/' + Id).then(resp => {
		store.dispatch({
			type: 'GET_PHOTO',
			photos: resp.data
		})
	})
}

export function addAlbum(obj) {
	return axios.post('Albums', obj).then(resp => {
		store.dispatch({
			type: 'ADD_ALBUM',
			albums: obj

		})
	})
}

export function addPhoto(obj) {
	return axios.post('photos', obj).then(resp => {
		store.dispatch({
			type: 'ADD_PHOTO',
			photos: obj

		})
	})
}

//post