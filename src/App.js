import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , {useState} from 'react';
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(){
  const [mode, setMode] = useState('light');
 const [alert, setAlert] = useState(null);

const showAlert = (message , type) => {
setAlert({
  msg : message,
  type : type
})

setTimeout(() => {
setAlert(null);
} , 2000);
}

  const toggleMode = ()=> {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled " , "success");
      document.title = 'textUtils - Dark Mode';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled " , "success");
      document.title = 'textUtils - Light Mode';
    }
  }

  return( 
<>
{/* <Navbar title="TextUtils" aboutText = "About TextUtils"></Navbar> */}

//Navbar

<Router>
<Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
<Alert alert={alert}/>

<div className = "container my-3">


        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          {/* <Route path="/users">
            <Users /> */}
          {/* </Route> */}
          <Route path="/">

<TextForm showAlert = {showAlert} heading = "Enter the text to analyze below" mode={mode}/>

             {/* <Home /> */}
          </Route>
        </Switch>

        </div>
        </Router>
{/* <TextForm heading="Enter the text to analyze"/> */}
{/* <About/> */}

</>

  );
}
export default App;
