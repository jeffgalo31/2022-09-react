import PropTypes from 'prop-types';

// export const MyFirstComponent = (props) => <>
//     {props.greeting}<br />
//     {props.p1}<br />
//     {props.p2}<br />
//     {props.p3}<br />
// </>;

import { MySecondComponent } from "./MySecondComponent";

/*
let me = {
    fn: 'Rod',
    ln: 'Nolan'
};
// const {fn, ln} = me;
const fn = me.fn;
const ln = me.ln;
*/
/*
export const MyFirstComponent = ({ greeting, p1, p2, p3 }) => <>
  {greeting}<br />
  <MySecondComponent 
    p1={p1} 
    p2={p2} 
    p3={p3} 
  />
</>;
*/

export const MyFirstComponent = ({ greeting, ...props }) => <>
  <h1>{greeting}</h1>
  <MySecondComponent 
    {...props} 
  />
</>;

MyFirstComponent.propTypes = {
  greeting: PropTypes.string.isRequired,
  p1: PropTypes.number.isRequired,
  p2: PropTypes.number.isRequired,
  p3: PropTypes.number,
}
