import React from 'react';
import Package from './Package';
import propTypes from 'prop-types';

export default class PackageList extends React.Component {
  constructor(props){
    super(props);
  }
    

  render() {
    return (<table className='is-bordered table column'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Version</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.entries(this.props.packages).map(([name, version]) => (
            <Package name={name} version={version} onClick={this.props.fetch} key={Math.random()} />
          ))
        }
      </tbody>
    </table>);
  }
}

PackageList.propTypes = {
  packages: propTypes.object,
  fetch: propTypes.func
};