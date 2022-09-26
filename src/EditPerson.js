import { useState } from "react";

export const EditPerson = ({ person, personUpdaterFunction }) => {

  const [personLocal, setPersonLocal] = useState(person);

  const handleSubmit = (event) => {
    event.preventDefault();
    personUpdaterFunction(personLocal);
  }


  const handleChange = (event) => {
    console.log(event.target.id, event.target.value);
    setPersonLocal({
      ...personLocal, ...{ [event.target.id]: event.target.value }
    });
    console.log('person to modify: ', personLocal);
  }

  return <>
    <h2>Person Edit Form</h2>
    {<p>{personLocal?.name} {personLocal?.email}</p>}

    <form className = "formStyle" onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        value={personLocal?.name}
        onChange={handleChange}

      />
      <br />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="text"
        value={personLocal?.email}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="gender">Gender: </label>
      <input type="radio" id="male" name="gender" value="male" />
      <label for="male">Male</label>
      <input type="radio" id="female" name="gender" value="female" />
      <label for="female">Female</label><br />
      <br />
      <input type="submit" />
    </form>

  </>;
}