import React from 'react'
import {Link} from 'react-router'
import {getAlbums,getPhotos} from 'api/photo_album'
import store from 'store'


const GalleryLayoutContainer = React.createClass({
	getInitialState: function(){
		return{
			albums: [],
			photos: []
		}
	},
	componentWillMount: function(){
		getAlbums()

		store.subscribe(() =>{
			const appState = store.getState()
				this.setState({
					albums: appState.albums
			})
		}),
		getPhotos(this.props.params.id)
			store.subscribe(()=>{
				const appState = store.getState()
					this.setState({
						photos: appState.photos
			})
		})
	},

	render: function(){
		return (
				<PhotoList photos={this.state.photos} albums={this.state.albums}/>
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
							<Link to={`/photos?albumid=${tab.id}`}>
								<h3>{tab.name}</h3>
								</Link>
						</div>
								
							)
						})
					}	
					</div>
					<div className="pictures">
					<div className="header_pictures"><h1>Pictures</h1></div>
					{this.props.photos.map(item =>
					<div className="photos" >
					<img className="pics" src={item.url}/>
					</div>


					)}
				
				</div>


				



			</div>
		)
	}
})


export default GalleryLayoutContainer

 