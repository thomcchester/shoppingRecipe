import alt from '../../alt';
import {assign} from 'underscore';

class HeaderActions {
  constructor() {
    this.generateActions(
      'updateAjaxAnimation',
      'findDefaultsSuccess',
      'findDefaultsFail'
    );
  }



  findDefaults(){
    $.ajax( {url: '/defaults' })
    .done((data) => {
      this.actions.findDefaultsSuccess(data)
    })
    .fail((jqXhr) => {
      this.actions.getDefaultsFail(jqXhr)
    })
  }

}

export default alt.createActions(HeaderActions);
