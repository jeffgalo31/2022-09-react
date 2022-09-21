import { useRef } from "react";

export const ChildAddForm  = ({personAdderFunction}) => {

  const fnRef = useRef();
  const lnRef = useRef();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.id)
    // console.log(event.target.value)

    const firstNameValueFromFormField = fnRef.current.value;
    const lastNameValueFromFormField = lnRef.current.value;
    personAdderFunction({
      fn: firstNameValueFromFormField,
      ln: lastNameValueFromFormField
    });
    fnRef.current.value = '';
    lnRef.current.value = '';
  }

  // const handleChange = (event) => {
  //   console.log(event.target.id)
  //   console.log(event.target.value)
  //   console.log({
  //     [event.target.id]: event.target.value
  //     }
  //   )
  // }

  return <>
    <h2>Person Add Form (uncontrolled componnent)</h2>

    <form onSubmit={handleSubmit}>
      <label htmlFor="fn">First Name</label>
      <input 
        id="fn"
        type="text" 
        ref={fnRef}
        />
      <label htmlFor="ln">Last Name</label>
      <input 
        id="ln"
        type="text"
        ref={lnRef}
        />
      <input type="Edit" />
    </form>
  </>;
}