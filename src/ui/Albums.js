import React from 'react'
import {Link} from 'react-router'
import {getAlbums} from 'api/photo_album'
import store from 'store'

const AlbumListContainer = React.createClass({
	getInitialState: function(){
		return{
			albums: []
		}
	},
	componentWillMount: function(){
		getAlbums()

		this.unsubscribe = store.subscribe(() =>{
			const appState = store.getState()
			this.setState({
				albums: appState.albums
			})
		})
	},
	componentWillUnmount: function(){
		this.unsubscribe()
	},
	render: function(){
		return (
				<AlbumList albums ={this.state.albums}/>
			)
	}
})
const AlbumList = React.createClass({
	render: function (){
		return(
			<div id = "containerAlbum">
				<div className="header"><h1>Albums</h1></div>
				<div id="page1">
					
						{this.props.albums.map(cover =>{
							return(
								<div className="album" key ={cover.id}>
									<Link to={`/Albums/${cover.id}`}>
									<img className="albums"	src={cover.coverphoto}/>
									<h3>{cover.name}</h3>
									</Link>
							</div>
							)
							})
						}
						
					
						
				</div>
			</div>
		)
	}
})	

export default AlbumListContainer




