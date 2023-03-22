import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About'; Stoped Routing because GH pages doesnot support it
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

//REACT ROUTER IMPORT
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light');//whether darkmode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }//fun to shooww alert and type is alert types or pahele alert null tha ab obj hai

  const togglemode = ()=> {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "Success")
      document.title = 'TextUtils - Dark Mode'
      //favicon area ko chamkana=====

    //   setInterval(() => {
    //     document.title='textutils is amazing';
    //   }, 2000);
    //   setInterval(()=>{ 
    //     document.title='install textutils is amazing';
    //   }, 1500);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title = "Textutils" mode={mode} toggleMode={togglemode}/>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
      {/* <Switch> capitalized 'S' */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter some text" mode={mode} />
          {/* </Route>
      </Switch> corrected closing tag */}
      </div> {/* added the closing tag */}
    {/* </Router> */}
    </>
  );
}

export default App;

