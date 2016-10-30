const DefaultState = {
	albums: [],
	photos: []
}



export default function(state = DefaultState, action){
	switch(action.type) {
		case 'GET_ALBUMS':
			return {...state, albums: action.albums}


		case 'GET_PHOTOS':
			return {...state, photos: action.photos}

		default:
			return state
	}
}