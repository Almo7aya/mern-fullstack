import React from 'react';
import PackageList from './PackageList';
import propTypes from 'prop-types';
import PackagePreview from './PackagePreview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'react app',
      packages: this.props.initPackages || null,
      currentPackageName: ''
    };
  }

  componentDidMount() {  
  }

  componentWillUnmount() {
  }

  fetchContent = (packageName) => {
    history.pushState(
      {
        currentPackageName: packageName
      },
      packageName
      ,
      `/package/${packageName}`
    );
    this.setState({
      currentPackageName: packageName,
      name: 'Package => ' + packageName
    });
  }


  currentContent = () => {
    if (!this.state.currentPackageName) {
      return(<div>
        <div className='columns'>
          <h3 className='column'>Your main packages</h3>
          <h3 className='column'>Your dev packages</h3>
        </div>
        <div className='columns'>
          <PackageList packages={this.state.packages.dependencies} fetch={this.fetchContent} />
          <PackageList packages={this.state.packages.devDependencies} fetch={this.fetchContent} />
        </div>
      </div>);
    } else {
      return (<PackagePreview content={this.state.currentPackageName} />);
    }
  }


  render() {
    if (this.state.packages) {
      return (<div className='content'>
        {
          <div>
            <h2 className='title'>Hello {this.state.packages.author}</h2>
            <h3>{this.state.name}</h3>
            {this.currentContent()}
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
