// import logo from "./logo.svg";
import { MyFirstComponent } from "./MyFirstComponent";

// import {Fragment} from "react";

const myName = "Rodney";

export const App = () => <>
  <h1>Hello World!</h1>
  <p>my name is {myName}</p>
  {/* <img src={logo} alt="logo" /> */}
  <MyFirstComponent 
    greeting="Hello Rod Nolan"
    p1="v1"
    p2="v2"
    p3="v3"
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