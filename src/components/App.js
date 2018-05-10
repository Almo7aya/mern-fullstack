import React from 'react';

import Package from './Package';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'react app'
    };
  }

  componentDidMount() {
    console.log('mounted');
  }

  componentWillUnmount() {
    console.log('about to remove');
  }

  render() {
    return (<div className='content'>
      <h2 className='title'>Hello {this.props.packages.author}</h2>
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
            Object.entries(this.props.packages.dependencies).map(([name, version], index) => (
              <Package name={name} version={version} key={index}/>
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
            Object.entries(this.props.packages.devDependencies).map(([name, version], index) => (
              <Package name={name} version={version} key={index}/>
            ))
          }
          </tbody>
        </table>
      </div>

    </div>);
  }
}

export default App;
