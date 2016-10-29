import {createStore} from 'redux'

import albumReducer from 'reducers/album-reducer'

const store = createStore(albumReducer)

export default store