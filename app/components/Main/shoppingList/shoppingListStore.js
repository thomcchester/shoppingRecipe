import alt from '../../../alt';
import shoppingListActions from './shoppingListActions';

class shoppingListStore {
  constructor() {
    this.bindActions(shoppingListActions);
  }

}

export default alt.createStore(shoppingListStore);
