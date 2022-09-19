import { useState } from "react";
import { Child } from "./Child"

export const Parent = () => {

  let someLocalVar = 'sdfhfshbfsdgfd'; // doesn't trigger a re-render
  const [person, setPerson] = useState({
    fn: 'Mickey',
    ln: 'Mouse'
  });
  // state changes DO trigger a re-render

  return <>
    <h1>Parent</h1>


    {someLocalVar}<br />
    <button onClick={() => {
      // this will NOT trigger a re-render
      someLocalVar = '5e5641e 62igfjgfjkhsdzg';
      console.log(someLocalVar);
    }}>update a local var</button>

    <button onClick={() => {
    // this WILL trigger a re-render
      setPerson({...person, fn: 'Bob'});
    }}>this WILL work - called from parent</button>

    <Child 
      person={person} 
      personUpdaterFunction={setPerson} 
    />
  
  </>
}