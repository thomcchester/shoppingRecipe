import React from 'react';
// import Footer from './components/footer/Footer';
import Header from './structure/header/Header';

class App extends React.Component {
  render() {
    return (
      <div>
          <h1>hello</h1>
          <Header history={this.props.history} />
          {this.props.children}
      </div>
    );
  }
}

export default App;
