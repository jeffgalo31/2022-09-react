import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { CreateTable } from "./CreateTable";

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

  //console.log(people);

  return <>
    <h1>Homework 5</h1>
    <CreateTable
      tableInformation={people}
    />
  </>
}
