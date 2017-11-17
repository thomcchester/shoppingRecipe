import React from 'react';
import {Link} from 'react-router';
import addRecipeToListStore from './addRecipeToListStore.js';
import addRecipeToListActions from './addRecipeToListActions.js';

class addRecipeToList extends React.Component {

	constructor(props) {
		super(props);
		this.state = addRecipeToListStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		addRecipeToListStore.listen(this.onChange);
		addRecipeToListActions.findaddRecipeToLists();
	}


	componentWillUnmount() {
		addRecipeToListStore.listen(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}
render() {
	var titleDate = this.state.addRecipeToListHold.slice(0).reverse().map(function(addRecipeToList){
		var addRecipeToListBody = addRecipeToList.Body.paragraphs.map(function(para){
			return(
				<li className="text" key={para.text}>{para.text}</li>
			)
		})
		return(
			<li className="titleDate" key={addRecipeToList._id}>
				<h3 className="title">{addRecipeToList.Title}, {addRecipeToList.Date}</h3>
				<ul>
					{addRecipeToListBody}
				</ul>
			</li>
		)
	})


		return (
			<div className="addRecipeToListBody">
				<h1 className="headaddRecipeToList">ActionaaddRecipeToList</h1>
				<ul>
					{titleDate}
				</ul>
			</div>
		);
	}
}

 export default addRecipeToList
