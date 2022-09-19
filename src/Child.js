import { useRef, useState } from "react";

// export const Child = ({person = {fn: '', ln: ''}, personUpdaterFunction = () => {}}) => {
export const Child = ({person, personUpdaterFunction}) => {


  const [personLocal, setPersonLocal] = useState(person);
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
    console.log('the form field was changed');
    console.log(event.target.id, event.target.value);
    setPersonLocal({
      ...personLocal, ...{[event.target.id]: event.target.value}
    });

    // setPersonLocal(
    //   {
    //     fn: document.getElementById('fn').value,
    //     ln: document.getElementById('ln').value
    //   }
    // )

    // note the use of the [] on the LEFT side of the colon character in the object defined above
    // this allows me to reference a variable as the property's NAME 
    // this technique lets me reuse this handleChange function for both fields
    // because I don't have to hard code {fn: event.target.value} or {ln: event.target.value}
  }

  return <>
    <h2>Child</h2>
    <p>{personLocal.fn} {personLocal.ln}</p>
    <button onClick={() => {
      personUpdaterFunction({...person, ln: 'Barker'});
    }}>this WILL work - called from child</button>

    <form onSubmit={handleSubmit}>
      <label htmlFor="fn">First Name</label>
      <input 
        id="fn" 
        type="text" 
        value={personLocal.fn}
        onChange={handleChange} 
        ref={fnRef}
        />
      <label htmlFor="ln">Last Name</label>
      <input 
        id="ln" 
        type="text" 
        value={personLocal.ln}
        onChange={handleChange} 
        ref={lnRef}
        />
      <input type="submit" />
    </form>
  </>;
}