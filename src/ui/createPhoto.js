import React from 'react'
import {Link, hashHistory} from 'react-router'
import store from 'store'
import {addPhoto} from 'api/photo_album'

export default React.createClass({
	getInitialState: function(){
		return {
			"name":"",
			"url":"",
		}
	},
	handleSubmit: function (e) {
		e.preventDefault()
		var obj = {
			name: this.state.name,
			url: this.state.url,
			albumId: this.props.params.albumId
		}
		addPhoto(obj)
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
			<div className="add_image">
				<div className="back">
					<button onClick={this.goBack}>Cancel</button>
				</div>
				<div className="create_photo">
					<p>Add New Photo</p>
					<form onSubmit={this.handleSubmit}>
						<input id="name" onChange={this.update} type="text" value={this.state.name} placeholder="Name of Photo"></input>
						<input id="url" onChange={this.update} type="url" value={this.state.url} placeholder="url"></input><br />
						<button id ="add_photo" type="submit">Submit</button>
					</form>
				</div>
			</div>
		)
	}
})