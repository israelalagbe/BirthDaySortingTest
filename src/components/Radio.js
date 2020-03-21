import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Radio extends Component {
  constructor() {
    super()
    this.state = {
      radioClick: "name"
    };
  }

  onChange(type) {
    this.setState({
      radioClick: type
    })
  }

  render() {
    const { sortBy } = this.props;
    return (
      <div className='radioButtons'>
        <div className='left'>
          <input type='radio' onChange={(event)=>event.target.checked && sortBy('name')} />
          <label>&nbsp;&nbsp;Sort by name</label>
        </div>
        <div className='right'>
          <input type='radio' onChange={(event)=>event.target.checked && sortBy('age')} />
          <label>&nbsp;&nbsp;Sort by age</label>
        </div>
      </div>
    );

  }
}

// Uncomment the snippet below
Radio.propTypes = {
	sortBy: PropTypes.func
}

export default Radio;
