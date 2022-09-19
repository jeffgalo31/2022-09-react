import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ChildAddForm } from "./ChildAddForm";
import { ChildEditForm } from "./ChildEditForm";

export const Parent = () => {

  const [personToEdit, setPersonToEdit] = useState();
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
    const peopleCopy = [...people]; // shallow copy Object.assign AND ...spread operator

    peopleCopy.push({ ...person, id: uuidv4() });

    setPeople(peopleCopy);
  }

  const editPerson = (person) => {
    const peopleCopy = [...people];

    // figure out where in the array this item lives
    let indexOfItemToEdit = people.findIndex((element) => element.id === person.id)
    if (indexOfItemToEdit < 0) {
      console.log('there is a problem');
    } else {
      peopleCopy[indexOfItemToEdit] = person;
      setPeople(peopleCopy);
    }

    console.log('replace the existing object with id ', person.id);
  }


  return <>
    <h1>Parent</h1>
    <ol>
      {
        people.map(
          (person) => {
            return <li key={person.id}>
              <button
                onClick={() => setPersonToEdit(person)}
              >
                edit
              </button>
              {person.fn} {person.ln}
            </li>
          }
        )
      }
    </ol>

    <ChildAddForm
      personAdderFunction={addPerson}
    />

    {
      personToEdit &&
      <ChildEditForm
        person={personToEdit}
        personUpdaterFunction={editPerson}
      />
    }
  </>
}
