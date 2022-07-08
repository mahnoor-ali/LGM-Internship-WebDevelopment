import './App.css';
import InputItem from './components/InputItem';
import ListItem from './components/ListItem';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <InputItem/>
        <ListItem/>
    </div>
  );
}

export default App;
