import React from "react";

export class Child extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fnRef = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    // const firstNameValueFromFormField = document.getElementById('fn').value;
    const firstNameValueFromFormField = this.fnRef.current.value;
    this.props.p1UpdaterFunction(firstNameValueFromFormField);
  }

  handleChange(event) {
    console.log('the form field was changed')
    console.log(event.target.value);
    this.props.p1UpdaterFunction(event.target.value);
  }

  render() {
    return <>
      <h2>Child</h2>
      <p>{this.props.p1}</p>
      <button onClick={() => {
        this.props.p1UpdaterFunction('sent from child component');
      }}>this WILL work - called from child</button>

      <form onSubmit={this.handleSubmit}>
        <label htmlFor="fn">First Name</label>
        <input 
          id="fn" 
          type="text" 
          placeholder={this.props.p1} 
          
          value={this.props.p1}
          onChange={this.handleChange} 
          ref={this.fnRef}
          />
        <input type="submit" />
      </form>

    </>
  }

}