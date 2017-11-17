import alt from '../../../alt';

class addRecipeToListActions {
	constructor() {
		this.generateActions(
			'findaddRecipeToListSuccess',
			'findaddRecipeToListFail'
		);
	}


	findaddRecipeToLists(){
    $.ajax( {url: '/addRecipeToLists' })
    .done((addRecipeToListData) => {
      this.actions.findaddRecipeToListSuccess(addRecipeToListData)
    })
    .fail((addRecipeToListjqXhr) => {
      this.actions.findaddRecipeToListFail(addRecipeToListjqXhr)
    })
  }
}


export default alt.createActions(addRecipeToListActions);
