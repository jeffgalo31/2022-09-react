import PropTypes from 'prop-types';
import React from 'react';


// React.createElement('p', {className: 'zbkvbda'}, "Hello World");
export const MySecondComponent = ({ p1, p2, p3 }) => <>
  {p1}<br />
  {p2}<br />
  {p3}<br />

  <p>the sum of all my properties is: {p1 + p2 + p3} </p>
</>;

MySecondComponent.propTypes = {
  p1: PropTypes.number.isRequired,
  p2: PropTypes.number.isRequired,
  p3: PropTypes.number,
}

MySecondComponent.defaultProps = {
  p3: 0
}
