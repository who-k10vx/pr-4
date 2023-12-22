import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const [input, setInput] = useState([{
    name: '', mobile: '',
  }])



  const Add = () => {
    let newfiled = { name: '', mobile: '' };
    let add = [...input, newfiled];
    setInput(add);
  }

  const Remove = (index) => {
    let oldData = [...input];
    oldData.splice(index, 1);
    setInput(oldData)
  }


  return (
    <center>
      <h1>Dynamic-Form</h1>

      <table>
        <tbody>
          {
            input.map((value, index) => {
              if (index == 0) {
                return (
                  <table>
                    <thead>
                      <tr>
                        <td class="text-uppercase p-1">Name</td>
                        <td class="text-uppercase p-1">Mobile</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr key={index}>
                        <td><input type='text' /></td>
                        <td><input type='text' /></td>
                      </tr>
                    </tbody>
                  </table>
                )
              } else {
                return (
                  <table>
                    <thead>
                      <tr>
                        <td class="text-uppercase p-1">Name</td>
                        <td class="text-uppercase p-1">Mobile</td>
                      </tr>
                    </thead>
                    <tr key={index}>

                      <td><input type='text' /></td>

                      <td><input type='text' /></td>
                      <td>
                        <button className='px-5 border-0 rounded m-3' onClick={() => Remove(index)}>-</button>
                      </td>
                    </tr>
                  </table>
                )
              }
            })
          }
        </tbody>
      </table>
      <button className='w-25 border-0 rounded m-3' onClick={() => Add()}>Add</button>


    </center>
  );
}


export default App;


