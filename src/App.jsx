
import './App.css';
import Card from './components/cards/Card';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import {data} from './helper/data';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Card veri={data}/>
    </div>
  );
}

export default App;
