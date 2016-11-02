import React from 'react'
import {Link, hashHistory} from 'react-router'
import store from 'store'
import {addPhoto} from 'api/photo_album'

const createPhotoContainer = React.createClass({
	getInitialState: function(){
		return {
			"name":"",
			"url":"",
		}
	},
	update: function(e){
		var obj = this.getInitialState
		var id = e.target.id

		obj[id] = e.target.value

		this.setState(obj)
	},

	createPhoto: function() {
		addPhoto(this.state).then(function(){
			hashHistory.push('/photos/')	
		})
		
	},
	render: function (){
		return(
			<div className="create_photo">
			<p>Add New Photo</p>
				<form>
					<input id="photoName" onChange={this.update} type="text" name="name" placeholder="Name of Photo"></input>
					<input id="url" onChange={this.update} type="url" name="url" placeholder="url"></input><br />
					<button id ="add_photo" onClick={this.createPhoto}>Add Photo</button>
				</form>
			</div>
			
		)
	}
})

export default createPhotoContainer