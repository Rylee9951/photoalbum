import React from 'react'
import {Link} from 'react-router'
import {getAlbums} from 'api/photo_album'

const AlbumListContainer = React.createClass({
	getInitialState: function(){
		return{
			albums: []
		}
	},
	componentWillMount: function(){
		getAlbums().then(resp =>{
			this.setState({
				albums: resp.data
			})
		})
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
							<Link to={`/Albums/${cover.id}`}>
							<div className="album" key={cover.id}>
							<img className="albums"	src={cover.coverphoto}/>
							<h3>{cover.name}</h3>
							</div></Link>
							)
							})
						}
						
					
						
				</div>
			</div>
		)
	}
})	

export default AlbumListContainer




