import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeStatus, status } from '../../../redux/modules/wizard/steps';

class ReserveSettings extends Component {
  componentDidMount() {
    this.props.changeStatus({ index: 4, status: status.PASSED });
  }

  render() {
    return (
      <div>
        <div>Result</div>
      </div>
    );
  }
}

export default connect(
  null,
  {
    changeStatus
  }
)(ReserveSettings);
