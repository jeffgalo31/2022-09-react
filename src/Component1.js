import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { CreateTable } from "./CreateTable";
import { AddPerson } from "./AddPerson";
import { EditPerson } from "./EditPerson";

export const Component1 = () => {

  const [personToEdit, setPersonToEdit] = useState();
  const [people, setPeople] = useState([
  ]);

  useEffect(() => {
    async function fetchData() {
      let url = "https://gorest.co.in/public-api/users";
      const response = await fetch(url);
      const responseAsJSON = response.ok ? await response.json() : null;
      const data = responseAsJSON && responseAsJSON.data;
      setPeople(data);
    }
    fetchData();
  }, []);

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
      setPersonToEdit();
    }

    console.log('replace the existing object with id ', person.id);
  }


  const CreateRows = () => {
    return <>
      {people.map(person => (
        <tr key={person.id}>
          <td >{person.id}</td>
          <td>{person.name}</td>
          <td>{person.email}</td>
          <td>{person.gender}</td>
          <td> <button type="button" id="EditPerson" onClick={() => setPersonToEdit(person)}>Edit</button> </td>
        </tr>
      ))}
    </>
  }

  return <>
    <h1 className="titleTag" >Homework 5</h1>
    <table className="infoTable">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Customize</th>
        </tr>
      </thead>
      <tbody>
        {CreateRows()}
      </tbody>
    </table>
    <AddPerson
      personAdderFunction={addPerson}
    />
    {
      personToEdit &&
      <EditPerson
        person={personToEdit}
        personUpdaterFunction={editPerson}
      />
    }

  </>;

}
