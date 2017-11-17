import React from 'react';
import {Link} from 'react-router';
import NavbarStore from './NavbarStore';
import NavbarActions from './NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
    NavbarActions.findDefaults();

    $(document).ajaxStart(() => {
      NavbarActions.updateAjaxAnimation('fadeIn');
    });

    $(document).ajaxComplete(() => {
      setTimeout(() => {
        NavbarActions.updateAjaxAnimation('fadeOut');
      }, 750);
    });
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    var navItems=this.state.tabs.map(function(tab) {
      return(
      <li key={tab.name}><Link to={tab.link}>{tab.name}</Link></li>
    );
    })
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/shoppingList'>Shopping List</Link></li>
            <li><Link to='/addRecipeToList'>Add A Recipe</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
