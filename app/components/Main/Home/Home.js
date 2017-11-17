import React from 'react';
import {Link} from 'react-router';
import HomeStore from './HomeStore'
import HomeActions from './HomeActions';
import {first, without, findWhere} from 'underscore';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    return (
      <div>

        <h1>home</h1>


      </div>
    );
  }
}

export default Home;
