import { useState } from "react";

export const EditPerson = ({ person, personUpdaterFunction }) => {

  const [personLocal, setPersonLocal] = useState(person);

  const handleSubmit = (event) => {
    event.preventDefault();
    personUpdaterFunction(personLocal);
  }


  const handleChange = (event) => {
    console.log('the form field was changed');
    console.log(event.target.id, event.target.value);
    setPersonLocal({
      ...personLocal, ...{ [event.target.id]: event.target.value }
    });
    console.log('person to modify: ' ,personLocal);
  }

  return <>
    <h2>Person Edit Form</h2>
    {<p>{personLocal?.name} {personLocal?.email}</p>}

    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={personLocal?.name}
        onChange={handleChange}

      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        value={personLocal?.email}
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
    
  </>;
}