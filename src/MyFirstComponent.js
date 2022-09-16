import PropTypes from 'prop-types';
import { useState } from 'react';

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

export const MyFirstComponent = ({ greeting, ...props }) => {
  // defined default values for state

  // const resultsfromusestate = useState(0);
  // let counter = resultsfromusestate[0];
  // let setCounter = resultsfromusestate[1];

  const [counter, setCounter] = useState(0);
  const [person, setPerson] = useState({
    fn: 'mickey',
    mn: 'billy',
    ln: 'mouse',
  });

  return <>
    <h1>{greeting}</h1>
    <p>state: {counter}</p>
    <p>person: {person.fn} {person.mn} {person.ln}</p>
    <button onClick={() => setCounter(5)}>update counter</button>
    
    <button onClick={() => setPerson({...person, fn: 'bob'})}>update person fn</button>
    <button onClick={() => setPerson({...person, ln: 'barker'})}>update person ln</button>
    <button onClick={() => setPerson({...person, fn: 'bob', ln: 'barker'})}>update whole person</button>
    
    <br />

    {/* standard HTML
    <button click="alert('hello')">update counter</button> */}



    <MySecondComponent
      {...props}
    />
  </>;
}


MyFirstComponent.propTypes = {
  greeting: PropTypes.string.isRequired,
  p1: PropTypes.number.isRequired,
  p2: PropTypes.number.isRequired,
  p3: PropTypes.number,
}
