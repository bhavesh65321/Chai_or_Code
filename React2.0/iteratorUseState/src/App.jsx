import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// ### Javascript Solution ##

//------------------------------------------------------------------------------------//

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//   <title>Counter App</title>
// </head>
// <body>
//   <h1>Hello Bhavesh</h1>
//   <h2 class="counter">Counter: - </h2>
//   <button class="add">Add</button>
//   <br />
//   <button class="remove">Remove</button>
//   <footer class="footer"></footer>

//   <script>
//     let value = 10;

//     const counterEl = document.querySelector('.counter');
//     const footerEl = document.querySelector('.footer');
//     const addBtn = document.querySelector('.add');
//     const removeBtn = document.querySelector('.remove');

//     function updateDOM() {
//       counterEl.textContent = `Counter: ${value}`;
//       footerEl.textContent = `Footer: ${value}`;
//       addBtn.textContent = `Add (${value})`;
//       removeBtn.textContent = `Remove (${value})`;
//     }

//     addBtn.addEventListener('click', () => {
//       value++;
//       updateDOM();
//     });

//     removeBtn.addEventListener('click', () => {
//       value--;
//       updateDOM();
//     });

//     // Initialize UI
//     updateDOM();
//   </script>
// </body>
// </html>


// ------------------------------------------------------------------------------------- //


function App() {
  let [value, setValue] = useState(10)

  // here this normal method onclick function its not updating the state variable of DOM.
  // useState help us to update the DOM variable once any change occures with the variables it will compare with
  //virtual dom and replace with new value


  
  const addValue = () => {
    console.log("added", value);
    value >= 20 ? value : setValue( value + 1 );
    
  }

  const removeValue = () => {
    console.log("added", value);
    value <= 0 ? value : setValue(value - 1 );
    
  }


  return (
  <>
     <h1>Hello Bhavesh</h1>
     <h2 className="counter">Counter: - {value} </h2>
     <button onClick = {addValue} >Add {value} </button>
     <br />
     <button onClick = {removeValue}>Remove {value} </button>
     <footer className="footer"> Hello {value} </footer>
  </>
  )
}

export default App;
