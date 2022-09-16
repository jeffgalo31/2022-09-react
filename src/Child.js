import React from "react";

export class Child extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {
    return <>
      <h2>Child</h2>
      <p>
        {this.props.p1}
      </p>
      <button onClick={() => {
        this.props.p1UpdaterFunction('sent from child component');
        // console.log(somePropValue);
      }}>this WILL work - called from child</button>

    </>
  }

}