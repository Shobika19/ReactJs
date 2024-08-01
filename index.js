 import React from 'react';
 import ReactDOM, { createRoot } from 'react-dom/client';
// function Sample(){
// return <h1>Welcome</h1>
// }
// const r1=ReactDOM. createRoot(document.getElementById('root'));
// r1.render(<Sample/>);

// import React from 'react';
// import ReactDOM, { createRoot } from 'react-dom/client';

// function Sample(){
// return (
// <div>
//    <label>Username</label>
//    <input type="text"placeholder='Enter the Username'></input>
//    <br/>
//    <label>Password</label>
//    <input type="password" placeholder='Enter the Password'></input>
//    <br/>
// <button>Submit</button>
// </div>


//   const r1=ReactDOM. createRoot(document.getElementById('root'));
//  r1.render(<Sample/>);
// import React from 'react';
// import ReactDOM, { createRoot } from 'react-dom/client';
// const Sample=()=>{
//   return(
//     <div>
//       <h1>My First React App</h1>
//       <p>React is a Javascript Library</p>

//     </div>
//   )
// }
// const r1=ReactDOM. createRoot(document.getElementById('root'));
// r1.render(<Sample/>);


// import React from 'react';
// import ReactDOM, { createRoot } from 'react-dom/client';

//   const App=()=>{
//   const Username="shobi" 
//   const password="123456"
//   return(
//     <div>
//       <h1>My First React App{Username}and{password}</h1>
//       <p>{new Date().toLocalDateString()}</p>
//       <p>My First react App</p>
//       <label>Username</label>
//       <input type="text"placeholder='Enter the Username'></input>
//       <br/>
//       <label>Password</label>
//       <input type="password" placeholder='Enter the Password'></input>
//       <br/>
//       <button>Submit</button>
//     </div>
//   )
// }
// const r1=ReactDOM. createRoot(document.getElementById('root'));
// r1.render(<App/>);


/*import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

const App = () => {
  const username = "shobi";
  const password = "123456";

  return (
    <div>
      <h1>My First React App {username} and {password}</h1>
      <p>{new Date().toLocaleDateString()}</p>
      <p>My First React App</p>
      <label>Username:</label>
      <input type="text" placeholder='Enter the Username' value={username} onChange={() => {}} />
      <br />
      <label>Password:</label>
      <input type="password" placeholder='Enter the Password' value={password} onChange={() => {}} />
      <br />
      <button type="submit">Submit</button>
    </div>
  );
}

const root = document.getElementById('root');
const rootElement = createRoot(root); // Use createRoot for concurrent mode
rootElement.render(<App />);*/



/*import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';  
const myelm1=<h1>Welcome</h1>
const myelm2=<p>React is Javascript Library for building user Interfaces.</p>
const myelm3=<label>Username</label>
const myelm4=<input type="text" placeholder="Enter your Username"/>
const myelm5=<label>Password</label>
const myelm6=<input type="password" placeholder="Enter your Password"/>
const myelm7=<button>Submit</button>
const myelm8=(
<div>
  <h1>My First React App</h1>
  <p>{new Date().toLocaleDateString()}</p>
  {myelm1}
  {myelm2}
  <br/>
  {myelm3}
  {myelm4}
  <br/>
  {myelm5}
  {myelm6}
  <br/>
  {myelm7}
</div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myelm8);*/
//without using 
/*import React from 'react';
import ReactDOM from 'react-dom/client';

const myElement = React.createElement('p', {}, 'I do not use JSX');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);*/


/*import React from 'react';
import ReactDOM from 'react-dom/client';
const App=()=>{
  return(
    <div>
      <h1>My First React app</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  )
}
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);*/

  //Fragment Tag
/*import React from 'react';
import ReactDOM from 'react-dom/client';
  const App=()=>{
    return(
     <>
     <h1>Welcome</h1>
     <h2>welcome</h2>
     </>
    )  
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App/>);*/

  //Importing CSS and Importing Bootstrap

/*import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
const App=()=>{
  return(
    <div className="Container">
    <h1>Welcome</h1>
    <h2>Welcome</h2>
    <form>
      <input type="submit" Value="Submit" className="btn btn -info"/>

    </form>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);*/

//condition Rendering
/*import React from 'react';
import ReactDOM from 'react-dom/client';
const x=11
let text="";
if (x>10){
  text="world"
}else if (x==10){
  text="equal"
}
else{
  text="less"
}
const Myelem=()=>{
  return (
    <div>
    <h1>{text}</h1>
    </div>

  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Myelem/>);*/

/*import React from 'react';
import ReactDOM from 'react-dom/client';
 
class Sample extends React.Component{
  render()
  {
    return(
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);*/

//Form in React
/*import React from 'react';
import ReactDOM from 'react-dom/client';
const App=()=>{
return(
  <div className="container">
    <label>UserName</label>
    <input type="text" placeholder="Enter the Username"/><br/>
    <label>Password</label>
    <input type="password" placeholder="Enter the Password"/><br/>
    <label>Email ID</label>
    <input type="email" placeholder="Enter the Email"/><br/>
    <div className="form">
        <label><input type="checkbox"/>Remember Me</label>
        <label>forgot Password</label>
    </div>
    <div className="new">
      <p>Don't have an account<a href="">Register</a></p>
    </div>
    <button>Submit</button> 
  </div>  
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);*/

//Function component
/*function Sample (props)
{
  return(
    <div>
      <h1>Hello{props.name}</h1>
      <h1>Hello{props.age}</h1>
    </div>

  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);*/

//Component in Component
/*function Sample1()
{
  return(
  <div>
    <center>
      <a href="">Home</a> &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="">About</a>""
    </center>
  </div>
  )
}
function Sample2()
{
  return(
    <div>
      <Sample1/>
      <h1>This is a Navbar</h1>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample2/>);*/

//component constructor
/*class Sample1 extends React. Component
{
  constructor(){
    super();
    this.state={name:"Rahul",age:"10"}
  }
  render()
  {
    return(
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample1/>);*/
//using constructor
/*class Header extends React.Component
{
  text="welcome"
  constructor()
  {
    super();
    this.state={f1:"red"}
  }
  render()
  {
    return(
      <div>
        <h1>{this.text}</h1>
        <h1>{this.state.f1}</h1>
        <h1 style={{color:this.state.f1}}>Welcome</h1>
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header/>);*/

import Sample from './App.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);

