import { useState } from "react";
import { Child } from "./Child"

export const Parent = () => {

  let someLocalVar = 'sdfhfshbfsdgfd'; // doesn't trigger a re-render
  const [person, setPerson] = useState({
    fn: 'Mickey',
    ln: 'Mouse'
  });
  // state changes DO trigger a re-render

  const buttonClickHandler = (event) => {
    // this WILL trigger a re-render
    setPerson({ ...person, fn: event.target.innerText });
  }

  return <>
    <h1>Parent</h1>
    <p>{person.fn} {person.ln}</p>


    {someLocalVar}<br />
    <button onClick={() => {
      // this will NOT trigger a re-render
      someLocalVar = '5e5641e 62igfjgfjkhsdzg';
      console.log(someLocalVar);
    }}>update a local var</button>

    <button onClick={ buttonClickHandler }>Bob</button>
    <button onClick={ buttonClickHandler }>Bill</button>

    <Child
      person={person}
      personUpdaterFunction={setPerson}
    />

  </>
}