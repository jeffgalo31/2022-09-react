import React from "react";

export class Child extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fnRef = React.createRef();
    this.lnRef = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    const firstNameValueFromFormField = this.fnRef.current.value;
    const lastNameValueFromFormField = this.lnRef.current.value;
    this.props.personUpdaterFunction({
      fn: firstNameValueFromFormField,
      ln: lastNameValueFromFormField
    });
  }

  handleChange(event) {
    console.log('the form field was changed')
    console.log(event.target.id, event.target.value);
    this.props.personUpdaterFunction({
      ...this.props.person, ...{[event.target.id]: event.target.value}
    });

    // note the use of the [] on the LEFT side of the colon character in the object defined above
    // this allows me to reference a variable as the property's NAME 
    // this technique lets me reuse this handleChange function for both fields
    // because I don't have to hard code {fn: event.target.value} or {ln: event.target.value}
  }

  render() {
    return <>
      <h2>Child</h2>
      <p>{this.props.person.fn} {this.props.person.ln}</p>
      <button onClick={() => {
        this.props.personUpdaterFunction({...this.props.person, ln: 'Barker'});
      }}>this WILL work - called from child</button>

      <form onSubmit={this.handleSubmit}>
        <label htmlFor="fn">First Name</label>
        <input 
          id="fn" 
          type="text" 
          placeholder={this.props.person.fn} 
          value={this.props.person.fn}
          onChange={this.handleChange} 
          ref={this.fnRef}
          />
        <label htmlFor="ln">Last Name</label>
        <input 
          id="ln" 
          type="text" 
          placeholder={this.props.person.ln} 
          value={this.props.person.ln}
          onChange={this.handleChange} 
          ref={this.lnRef}
          />
        <input type="submit" />
      </form>

    </>
  }

}