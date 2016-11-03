import React from 'react'
import {Link, hashHistory} from 'react-router'
import store from 'store'
import {addAlbum} from 'api/photo_album'

export default React.createClass({
	getInitialState: function(){
		return {
			"name":"",
			"coverphoto":"",
		}
	},
	handleSubmit: function (e) {
		e.preventDefault()
		var obj = {
			name: this.state.name,
			coverphoto: this.state.coverphoto
		}
		addAlbum(obj)
	},
	update: function(e){
		var val = e.target.value
		var id = e.target.id

		var stateObj = {}

		stateObj[id] = val

		this.setState(stateObj)
	},
	goBack: function (e) {
		e.preventDefault()
		hashHistory.goBack()
	},
	render: function (){
		return(
			<div className='add_photo_album'>
				<div className="back">
					<button onClick={this.goBack}>Cancel</button>
				</div>
				<div className="create_album">
				<p>Add New Album</p>
					<form onSubmit={this.handleSubmit}>
						<input id="name" onChange={this.update} type="text" value={this.state.name} placeholder="Name of Album"></input>
						<input id="coverphoto" onChange={this.update} type="url" value={this.state.coverphoto} placeholder="Cover Photo url"></input><br />
						<button id ="add_photo" type="submit">Submit</button>
					</form>
				</div>
			</div>
		)
	}
})