import React from 'react'
import {Link} from 'react-router'
import {getAlbums, getPhotos} from 'api/photo_album'


const GalleryListContainer = React.createClass({
	getInitialState: function(){
		return{
			photos: []
		}
	},
	componentWillMount: function(){
		var id = this.props.params.id;
		getPhotos().then(resp =>{
			this.setState({
				photos: resp.data.url
			})
		})
	},
	render: function(){
		return (
				<PhotoList albums ={this.state.photos}/>
			)
	}
})

 const PhotoList = React.createClass({
	render: function (){
		return(
			<div id="gallery_layout">
				<div className="coloumn">
					{this.props.albums.map(tab =>{
					return(
						<div className="button" key={tab.id}>
							<h3>{tab.name}</h3>
						</div>
						)
					})
					}	
					</div>
				<div className="pictures">
					<div className="header_pictures"><h1>Pictures</h1></div>
					{this.props.photos.map(item =>
					<div className="photos" key={item.albumid.id}>
					<img className="pics" src={item.url}/>
					</div>


					)}
				</div>



			</div>
		)
	}
})


export default GalleryListContainer




