import React from 'react';
// import Footer from './components/footer/Footer';
import Header from './structure/Header/Header';

class App extends React.Component {
  render() {
    return (
      <div>
          <h1>duck</h1>
          <Header history={this.props.history} />
          {this.props.children}
      </div>
    );
  }
}

export default App;
