import React from 'react';
import Package from './Package';
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
              <table className='is-bordered table column'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Version</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Object.entries(this.state.packages.dependencies).map(([name, version]) => (
                      <Package name={name} version={version} key={Math.random()} />
                    ))
                  }
                </tbody>
              </table>
              <table className='is-bordered table column'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Version</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Object.entries(this.state.packages.devDependencies).map(([name, version]) => (
                      <Package name={name} version={version} key={Math.random()} />
                    ))
                  }
                </tbody>
              </table>
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
