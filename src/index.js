import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 style={{
      textAlign:"center",
      userSelect:"none",
    }}>NamishGrapher</h1>
    <p style={
      {
        fontSize:"20.5px",
        textAlign:"center"
      }
    }>NamishGrapher helps you to create a page that is about yourself. This page can only be seen by those people to whom you sent the link of the generated page.</p>
   <form style={
    {
      textAlign:"center",
      fontSize:"20.5px"
    }
   } method="post" action='https://namishgrapher.herokuapp.com/create'>
     <input placeholder='Your Name' name='userName' type="text" required></input>
     <br></br>
     <input placeholder='Your Age' name='userAge' type="number" required></input>
     <br></br>
     <input placeholder='Where do you live in?' name='userPlace' type="text" required></input>
     <br></br>
     <textarea placeholder='Write something more about yourself' name='userMore' type="text" required></textarea>
     <br></br>
     <br></br>
    <button type='submit'>Create my page</button>
   </form>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
