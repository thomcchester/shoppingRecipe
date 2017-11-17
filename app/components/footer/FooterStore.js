import alt from '../../alt';
import FooterActions from './FooterActions';

class FooterStore {
  constructor() {
    this.bindActions(FooterActions);
  }
}

export default alt.createStore(FooterStore);
