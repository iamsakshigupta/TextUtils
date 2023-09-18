import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {


  return (

    <div className="App ">
      <Router>
      <Navbar title="TextUtils"></Navbar>

        <Routes>
          <Route path="/" element={<TextForm/>}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* <Route exact path="/About" component={About} /> */}
        </Routes>
    
    </Router>
     
    </div>
  );
}

export default App;
