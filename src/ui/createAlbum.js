import React from 'react'
import {Link, hashHistory} from 'react-router'
import store from 'store'
import {addAlbum} from 'api/photo_album'

const createAlbumContainer = React.createClass({
	getInitialState: function(){
		return {
			"name":"",
			"coverphoto":""
		}
	},
	update: function(e){
		var obj = this.getInitialState
		var id = e.target.id

		obj[id] = e.target.value

		this.setState(obj)
	},

	createAlbum: function() {
		addAlbum(this.state).then(function(){
			hashHistory.push('/Album/')	
		})
		
	},
	render: function (){
		return(
			<div className="create_album">
			<p>Add New Album</p>
				<form>
					<input id="albumName" onChange={this.update} type="text" name="name" placeholder="Name of Album"></input>
					<input id="coverPhoto_url" onChange={this.update} type="url" name="coverphoto" placeholder="Coverphoto url"></input><br />
					<button id ="add_album" onClick={this.createAlbum}>Add Album</button>
				</form>
			</div>
			
		)
	}
})

export default createAlbumContainer