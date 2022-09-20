import { useEffect, useState } from "react";

export const CreateTable = (tableInformation) => {

  const array1 = Object.values(tableInformation);
  const array2 = Object.values(array1).at(0);

  //  array2.map((persona, i) => {
  //    console.log(i, persona.name);
  //  });

  const CreateRows = () => {
    return <>
      {array2.map(person => (
        <tr key={person.id}>
          <td >{person.id}</td>
          <td>{person.name}</td>
          <td>{person.email}</td>
          <td>{person.gender}</td>
          <td> <button type="button" id="clarify">Edit</button> </td>
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
  </>;
}