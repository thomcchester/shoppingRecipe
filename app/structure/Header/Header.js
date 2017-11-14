import React from 'react';
import {Link} from 'react-router';
import HeaderStore from './HeaderStore';
import HeaderActions from './HeaderActions';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = HeaderStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount(){
    HeaderStore.listen(this.onChange);
    HeaderActions.findDefaults();

    $(document).ajaxStart(() => {
      HeaderActions.updateAjaxAnimation('fadein')
    });

    $(document).ajaxComplete(() => {
      setTimeout(() => {
        HeaderActions.updateAjaxAnimation('fadeOut');
      }, 750);
    });
  }

    componentWillUnmount(){
      NavbarStore.unlisten(this.onChange);
    }

    onChange(state) {
      this.setState(state);
    }

    render(){
      return(
        <h1>killawhale</h1> 
      )
    }

}


export default Header;
