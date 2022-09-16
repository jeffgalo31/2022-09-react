// import logo from "./logo.svg";
import { MyClassComponent } from "./MyClassComponent";
import { MyFirstComponent } from "./MyFirstComponent";

// import {Fragment} from "react";



// export function App() {
  //   return <div>bzdljvbdfkjlbv</div>
  // }
export const App = () => <>
  <h1>Hello World!</h1>
  {/* <p>my name is {myName}</p> */}
  {/* <img src={logo} alt="logo" /> */}
  <MyFirstComponent 
    greeting="Hello Rod Nolan"
    p1={10}
    p2={20}
    p3={30}
  />

  <MyClassComponent
    description="this is a class-based component"
    optionalSubDescription="this is the old, clunky way of making components"
  />


</>;

/*

let functionArguments = {
  greeting: "Hello Rod",
  p1:"v1",
  p2:"v2",
  p3:"v3"
}

MyFirstComponent(functionArguments)

*/

/*
export function App() {
  const myName = "Rodney";
  return (
    <>
      <h1>Hello World!</h1>
      <p>my name is {myName}</p>
      <img src={logo} alt="logo" />
    </>
  );
}
*/