import { useState } from "react";
// import { Child } from "./Child"
import { ChildAddForm } from "./ChildAddForm";
import { v4 as uuidv4 } from 'uuid';

export const Parent = () => {

  const [people, setPeople] = useState([
    {
      id: 123,
      fn: 'Mickey',
      ln: 'Mouse'
    },
    {
      id: 543,
      fn: 'Bill',
      ln: 'Gates'
    },
  ]);

  const addPerson = (person) => {
    let peopleCopy = [...people]; // shallow copy Object.assign AND ...spread operator

    peopleCopy.push({ ...person, id: uuidv4() });
    setPeople(peopleCopy);
  }

  return <>
    <h1>Parent</h1>
    <ol>
      {
        people.map(
          (person) => {
            return <li key={person.id}>{person.fn} {person.ln} </li>
          }
        )
      }
    </ol>

    <button onClick={() => {
      // people[1].fn = "Jack";
      // console.log(people[1]);

      let peopleCopy = [...people]; // shallow copy Object.assign AND ...spread operator

      const newBill = { ...peopleCopy[1] };
      newBill.fn = "Bob";

      peopleCopy[1] = newBill;

      setPeople(peopleCopy);
    }}>
      update bill
    </button>
    <ChildAddForm
      personAdderFunction={addPerson}
    />
    {/* <Child
      person={person}
      personUpdaterFunction={setPerson}
    /> */}
  </>
}