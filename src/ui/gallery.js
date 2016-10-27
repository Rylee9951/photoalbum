import React from 'react'
import {Link} from 'react-router'


export default React.createClass({
	render: function (){
		return(
			<div id="gallery_layout">
				{this.props.albums.map(tab =>{
					return(
					<div className="coloumn">
						<div className="button" key={tab.id}>
							<h3>{tab.name}</h3>
						</div>
						
						</div>
						)
					})
					}	
					
				<div className="pictures">
					<div className="header_pictures"><h1>Pictures</h1></div>
					<div className="photos"></div>
					<div className="photos"></div>
					<div className="photos"></div>
					<div className="photos"></div>
					<div className="photos"></div>
					<div className="photos"></div>
				</div>



			</div>
		)
	}
})