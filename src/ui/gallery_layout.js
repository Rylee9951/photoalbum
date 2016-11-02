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
		getPhotos(this.props.params.id)

		this.unsubscribe = store.subscribe(() => {
				const appState = store.getState()
				this.setState({
					albums: appState.albums,
					photos: appState.photos
			})
		})

	},

	componentWillUnmount: function(){
		this.unsubscribe()
	},

	render: function(){
		return (
				<PhotoList photos={this.state.photos} albums={this.state.albums}/>
			)
	}
})

 const PhotoList = React.createClass({
 	clickHandler: function(item) {
 		getPhotos(item.id)
 	},

	render: function (){
		return(
			<div id="gallery_layout">
				<div className="coloumn">
					{this.props.albums.map(tab =>{
					return(
						<div className="button" key={tab.id} onClick={() => this.clickHandler(tab)}>
							<Link to={`/Albums/${tab.id}`}>
								<h3>{tab.name}</h3>
							</Link>
						</div>
								
							)
						})
					})	
				</div>
				<div className="pictures">
					<div className="header_pictures"><h1>Pictures</h1></div>
						<Link to="/createPhoto/">
							<button className="add">Add Photo</button>
						</Link><br />
							{this.props.photos.map(item =>
								<div className="photos" key={item.url} >
									<Link to={"/photo/" + item.id}>
										<img className="pics" src={item.url}/>
										<h4>{item.name}</h4>
									</Link>
								</div>
						)}
					</div>
			</div>
		)
	} 
})


export default GalleryLayoutContainer

 