const DefaultState = {
	albums: [],
	photos: [],
	currentPhoto: {}
}



export default function(state = DefaultState, action){
	switch(action.type) {
		case 'GET_ALBUMS':
			return {...state, albums: action.albums}

		case 'GET_PHOTOS':
			return {...state, photos: action.photos}

		case 'GET_PHOTO':
			return {...state, currentPhoto: action.photos }

		default:
			return state
	}
}