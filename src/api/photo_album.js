import axios from 'axios'
import store from 'store'
import {hashHistory} from 'react-router'

axios.defaults.baseURL = 'http://localhost:8001/'

export function getAlbums(){
	return axios.get("albums").then(function(resp){
		store.dispatch({
			type: 'GET_ALBUMS',
			albums: resp.data
		})
	})
}

export function getAlbum(albumId){
	return axios.get(`albums/${albumId}`).then(function(resp){
		store.dispatch({
			type: 'GET_ALBUMS',
			album: resp.data
		})
	})
}

export function getPhotos(albumId) {
	return axios.get(`albums/${albumId}?_embed=photos`).then(function(resp){
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
	return axios.post('/Albums', obj).then(resp => {
		hashHistory.push('/')
	})
}

export function addPhoto(obj) {
	return axios.post('photos', obj).then(resp => {
		hashHistory.push(`/Albums/${obj.albumId}`)
	})
}

export function deletePhoto(id, albumId){
	return axios.delete(`photos/${id}`).then(resp =>{
		getPhotos(albumId)
	})
}


//post