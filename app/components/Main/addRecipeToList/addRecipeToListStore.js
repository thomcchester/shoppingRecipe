import alt from '../../../alt';
import addRecipeToListActions from './addRecipeToListActions';

 class addRecipeToListStore {
	constructor() {
		this.bindActions(addRecipeToListActions);
    this.blogHold=[];
	}
  onFindBlogSuccess(blogData) {
    this.blogHold=blogData;

  }
}

export default alt.createStore(addRecipeToListStore);
