import { useRef } from "react";

export const AddPerson = ({ personAdderFunction }) => {

  const nameRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const NameValueFromFormField = nameRef.current.value;
    const EmailValueFromFormField = emailRef.current.value;
    const GenderValueFromFormField = genderRef.current.value;


    personAdderFunction({
      name: NameValueFromFormField,
      email: EmailValueFromFormField,
      gender: GenderValueFromFormField
    });
    nameRef.current.value = '';
    emailRef.current.value = '';
    genderRef.current.value = '';
  }

  return <>
  
      <h2>Person Add Form</h2>

      <form id="addPersonForm" onSubmit={handleSubmit}>
        <label htmlFor="name" className="inputLabel">Name</label>
        <input className="inputID"
          id="name"
          type="text"
          ref={nameRef}
        />
        <br />
        <label htmlFor="email" className="inputLabel">Email</label>
        <input className="inputID"
          id="email"
          type="text"
          ref={emailRef}
        />
        <br />
        <label htmlFor="gender" className="inputLabel">Gender</label>
        <input className="inputID"
          id="gender"
          type="text"
          ref={genderRef}
        />
        <br />

        <input type="submit" />

      </form>
  
  </>;
}