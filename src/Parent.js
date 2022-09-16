import { useState } from "react";
import { Child } from "./Child"

export const Parent = () => {
  const [person, setPerson] = useState({
    fn: 'Mickey',
    ln: 'Mouse'
  });

  return <>
    <h1>Parent</h1>

    <button onClick={() => {
      setPerson({...person, fn: 'Bob'});
    }}>this WILL work - called from parent</button>

    <Child person={person} personUpdaterFunction={setPerson} />
  
  </>
}