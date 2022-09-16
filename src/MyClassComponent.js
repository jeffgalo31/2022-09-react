import React from 'react';
import PropTypes from 'prop-types';

export class MyClassComponent extends React.Component {
  render() {
    return <>
      <p>{this.props.description}</p>
      <p>{this.props.optionalSubDescription}</p>
      <hr />
    </>;
  }
}

MyClassComponent.propTypes = {
  description: PropTypes.string.isRequired,
  optionalSubDescription: PropTypes.string
};

MyClassComponent.defaultProps = {
  optionalSubDescription: ' no sub description supplied '
};