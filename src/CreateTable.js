import { useEffect, useState } from "react";
import { EditPerson } from "./EditPerson";

export const CreateTable = ({tableInformation}) => {


  const [personToEdit, setPersonToEdit] = useState();
  const [people, setPeople] = useState([
    //   {
    //     id: 123,
    //     fn: 'Mickey',
    //     ln: 'Mouse'
    //   },
    //   {
    //     id: 543,
    //     fn: 'Bill',
    //     ln: 'Gates'
    //   },
  ]);


  //  array2.map((persona, i) => {
  //    console.log(i, persona.name);
  //  });

  const editPerson = (person) => {
    const peopleCopy = [...tableInformation];

    // figure out where in the array this item lives
    let indexOfItemToEdit = tableInformation.findIndex((element) => element.id === person.id)
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
      {tableInformation.map(person => (
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

    {
      personToEdit &&
      <EditPerson
        person={personToEdit}
        personUpdaterFunction={editPerson}
      />
    }

  </>;
}