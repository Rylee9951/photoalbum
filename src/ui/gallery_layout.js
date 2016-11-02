import React from 'react'
import {Link, hashHistory} from 'react-router'
import {getAlbums,getPhotos,deletePhoto} from 'api/photo_album'
import store from 'store'


const GalleryLayoutContainer = React.createClass({
	getInitialState: function(){
		return{
			id:'',
			photos: [],
			albums:[],
			albumName:''
		}
	},
	componentWillMount: function(){
		getAlbums()
		getPhotos(this.props.params.id)

		this.unsubscribe = store.subscribe(() => {
			const appState = store.getState()
			this.setState({
				albums: appState.albums,
				id: appState.photos.id,
				photos: appState.photos.photos,
				albumName: appState.photos.name
			})
		})

	},

	componentWillUnmount: function(){
		this.unsubscribe()
	},

	render: function(){
		return (
				<PhotoList {...this.state} />
			)
	}
})

 const PhotoList = React.createClass({
 	getDefaultProps: function () {
 		return {
 			id:'',
 			name: '',
 			photos: [],
 			albums: [],
 			albumName: ''
		}
 	},
 	clickHandler: function(item) {
 		getPhotos(item.id)
 	},
 	deletePhoto: function(e){
 		var id = e.target.id
 		deletePhoto(id, this.props.id)
 	},
	render: function (){
		return(
			<div id="gallery_layout">
				<div className="coloumn">
					{this.props.albums.map(tab =>{
						return (
							<div className="button" key={tab.id} onClick={() => this.clickHandler(tab)}>
								<Link to={`/Albums/${tab.id}`}>
									<h3>{tab.name}</h3>
								</Link>
							</div>
								
						)
					})}
				</div>
				<div className="pictures">
					<div className="header_pictures"><h1>{this.props.albumName}</h1></div>
							<button className="add" onClick={() => {hashHistory.push(`/Album/${this.props.id}/add`)}}>Add Photo</button>
						<br />
							{this.props.photos.map(item =>
								<div className="photos" key={item.url} >
									<Link to={"/photo/" + item.id}>
										<img className="pics" src={item.url}/>
										<h4>{item.name}</h4>
									</Link>
									<button id={item.id} onClick= {this.deletePhoto}>Delete</button>
								</div>
						)}
					</div>
			</div>
		)
	} 
})


export default GalleryLayoutContainer

 