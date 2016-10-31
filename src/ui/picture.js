import React from 'react'
import {Link, hashHistory} from 'react-router'
import {getPhoto} from 'api/photo_album'
import store from 'store'


const PictureContainer = React.createClass({
	getInitialState: function(){
		return{
			photo: {
				url: '',
				name: ''
			}
		}
	},
	componentWillMount: function(){
		getPhoto(this.props.params.id)
			
			this.unsubscribe = store.subscribe(()=>{
				const appState = store.getState()
					this.setState({
						photo: appState.currentPhoto
			})
		})
		console.log(this.state.photo)
	},
	componentWillUnmount: function() {
		this.unsubscribe()
	},

	render: function(){
		return (
				<PhotoProfile photo={this.state.photo} />
			)
	}
})
const PhotoProfile = React.createClass({
	goBack: function (e) {
		e.preventDefault()
		hashHistory.goBack()
	},
	render: function (){
		return(
				<div className="image">
					<div>
						<button onClick={this.goBack}>Go Back</button>
					</div>
						<div className="profile" >
						<h1>{this.props.photo.name}</h1>
							<img className="picture" src={this.props.photo.url}/>
							
						</div>
					
				</div>
			
		)
	}
})

export default PictureContainer