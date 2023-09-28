// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const userNameRef = React.useRef();
  const [isError, setError] = React.useState(null);
  const [username, setUsername] = React.useState('');
  let correctedInputValue;


  function handleSubmit(e) {
    e.preventDefault();
    // const username = document.querySelector('#usernameInput').value;
    // onSubmitUsername(username);

    // const name = e.target[0].input.value;
    // onSubmitUsername(name);

    // const anotherWay = e.target.elements.usernameInput.value
    // onSubmitUsername(anotherWay);


    // using state to trak username we dont havd to use refs
    // const usingRefs = userNameRef.current.value;
    // onSubmitUsername(usingRefs);

    onSubmitUsername(username)
  };

  function handleChange(e) {
    const {value} = e.target;
    // const isValid = value === value.toLowerCase();
    // setError(isValid ? null : 'Username must be lower case')
    myInputValue = value.toLowerCase();
    setUsername(myInputValue);
  }

  function myInputValue(e) {
  }

  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input value={username} ref={userNameRef} id="usernameInput" type="text" onChange={handleChange}  />
      </div>
      {/*<div style={{color: 'red'}}>{isError}</div>*/}
      <button type="submit" disabled={isError} >Submit</button>
    </form>
  )
}



function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);





  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
