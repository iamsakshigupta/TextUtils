import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
 
  return (
    <div className="App dark:bg-slate-700 ">
      
      <Navbar title="TextUtils"/>
      <TextForm></TextForm>
    </div>
  );
}

export default App;
