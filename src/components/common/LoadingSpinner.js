import React, { Component } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

class LoadingSpinner extends Component {

  render() {
    return( 
      <div className="sweet-loading">
        <ClipLoader
          sizeUnit={"px"}
          size={150}
          color={'Black'}
          loading={this.props.loading}
        />
      </div>
    ); 
  }
}

export default LoadingSpinner;