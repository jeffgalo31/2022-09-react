import React from 'react';
import PropTypes from 'prop-types';

export class MyClassComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fn: "Rod",
      ln: "Nolan"
    };
  }

  render() {
    return <>
      <p>{this.props.description}</p>
      <p>{this.props.optionalSubDescription}</p>

      <p>{this.state.fn} {this.state.ln}</p>
      <button onClick={ () => {
        this.setState({
          fn: 'bob'
        });
      }}
      >update fn</button>

      <button onClick={ () => {
        this.setState({
          ln: 'barker'
        });
      }}
      >update ln</button>

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