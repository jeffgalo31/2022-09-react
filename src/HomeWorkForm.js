import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { CreateTable } from "./CreateTable";
import { AddPerson } from "./AddPerson";

export const HomeWorkForm = () => {

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

  return <>
    <h1>Homework 5</h1>
    <CreateTable
      tableInformation={[...people]}
    />
    <AddPerson
      personAdderFunction={addPerson}
    />

  </>
}
