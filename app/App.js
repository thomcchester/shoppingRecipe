import React from 'react';
// import Footer from './components/footer/Footer';
import Navbar from './structure/header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="outerCheck">
          <Navbar history={this.props.history} />
          {this.props.children}
      </div>
    );
  }
}

export default App;
