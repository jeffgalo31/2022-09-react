import { useState } from "react";

export const ChildEditForm = ({person, personUpdaterFunction}) => {

  const [personLocal, setPersonLocal] = useState(person);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    personUpdaterFunction(personLocal);
  }

  const handleChange = (event) => {
    console.log('the form field was changed');
    console.log(event.target.id, event.target.value);
    setPersonLocal({
      ...personLocal, ...{[event.target.id]: event.target.value}
    });
  }

  return <>
    <h2>Person Edit Form (controlled componnent)</h2>
    <p>{personLocal?.fn} {personLocal?.ln}</p>

    <form onSubmit={handleSubmit}>
      <label htmlFor="fn">First Name</label>
      <input 
        id="fn" 
        type="text" 
        value={personLocal?.fn}
        onChange={handleChange} 
        
        />
      <label htmlFor="ln">Last Name</label>
      <input 
        id="ln" 
        type="text" 
        value={personLocal?.ln}
        onChange={handleChange} 
        
        />
      <input type="submit" />
    </form>
  </>;
}