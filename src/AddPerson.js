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
      <label htmlFor="name" className="inputLabel">Name: </label>
      <input className="inputID"
        id="name"
        type="text"
        ref={nameRef}
      />
      <br />
      <label htmlFor="email" className="inputLabel">Email: </label>
      <input className="inputID"
        id="email"
        type="text"
        ref={emailRef}
      />
      <br />
      <label htmlFor="gender">Gender: </label>
      <input type="radio" id="male" name="gender" value="male" ref={genderRef}/>
      <label for="male">Male</label>
      <input type="radio" id="female" name="gender" value="female" />
      <label for="female">Female</label><br />
      <br />

      <input type="submit" />

    </form>

  </>;
}