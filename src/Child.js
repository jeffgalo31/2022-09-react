import { useRef } from "react";

export const Child = ({person, personUpdaterFunction}) => {

  const fnRef = useRef();
  const lnRef = useRef();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const firstNameValueFromFormField = fnRef.current.value;
    const lastNameValueFromFormField = lnRef.current.value;
    personUpdaterFunction({
      fn: firstNameValueFromFormField,
      ln: lastNameValueFromFormField
    });
  }

  const handleChange = (event) => {
    console.log('the form field was changed')
    console.log(event.target.id, event.target.value);
    personUpdaterFunction({
      ...person, ...{[event.target.id]: event.target.value}
    });

    // note the use of the [] on the LEFT side of the colon character in the object defined above
    // this allows me to reference a variable as the property's NAME 
    // this technique lets me reuse this handleChange function for both fields
    // because I don't have to hard code {fn: event.target.value} or {ln: event.target.value}
  }

  return <>
    <h2>Child</h2>
    <p>{person.fn} {person.ln}</p>
    <button onClick={() => {
      personUpdaterFunction({...person, ln: 'Barker'});
    }}>this WILL work - called from child</button>

    <form onSubmit={handleSubmit}>
      <label htmlFor="fn">First Name</label>
      <input 
        id="fn" 
        type="text" 
        placeholder={person.fn} 
        value={person.fn}
        onChange={handleChange} 
        ref={fnRef}
        />
      <label htmlFor="ln">Last Name</label>
      <input 
        id="ln" 
        type="text" 
        placeholder={person.ln} 
        value={person.ln}
        onChange={handleChange} 
        ref={lnRef}
        />
      <input type="submit" />
    </form>
  </>;
}