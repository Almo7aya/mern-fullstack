import React from 'react';
import PackageList from './PackageList';
import propTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'react app',
      packages: this.props.initPackages || null
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }


  render() {
    if (this.state.packages) {
      return (<div className='content'>
        {
          <div>
            <h2 className='title'>Hello {this.state.packages.author}</h2>
            <div className='columns'>
              <h3 className='column'>Your main packages</h3>
              <h3 className='column'>Your dev packages</h3>
            </div>
            <div className='columns'>
              <PackageList packages={this.state.packages.dependencies} />
              <PackageList packages={this.state.packages.devDependencies} />
            </div>
          </div>
        }
      </div>);
    } else {
      return (<div>Loading...</div>);
    }

  }
}

App.propTypes = {
  initPackages: propTypes.object
};

export default App;
