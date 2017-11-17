import React from 'react';
import {Link} from 'react-router';
import FooterStore from './FooterStore'
import FooterActions from './FooterActions';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = FooterStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    FooterStore.listen(this.onChange);

  }

  componentWillUnmount() {
    FooterStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    return (
      <footer>
        <h3 className='lead'><strong>Things and Stuff</strong></h3>
        <h3 className='lead'>Some Large Information</h3>
      </footer>
    );
  }
}

export default Footer;
