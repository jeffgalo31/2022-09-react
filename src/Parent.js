import { useState } from "react";
import { Child } from "./Child"

export const Parent = () => {
  
  // let somePropValue = 'sdhkfghdsfjkl';
  const [somePropValue, setSomePropValue] = useState('sdhkfghdsfjkl');
  
  return <>
  <h1>Parent</h1>

  {/* 
  this is an example of what NOT to do
  <button onClick={() => {
    somePropValue = 'x,kcbvkjdhsbvkjhsbjkvhcbjvbxc';
    console.log(somePropValue);
  }}>this will not work</button> */}

  <button onClick={() => {
    setSomePropValue('x,kcbvkjdhsbvkjhsbjkvhcbjvbxc');
    // console.log(somePropValue);
  }}>this WILL work - called from parent</button>

  <Child p1={somePropValue} p1UpdaterFunction={setSomePropValue} />
  
  </>
}