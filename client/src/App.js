import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Update from './components/Update';
import View from './components/View';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/update/:id' element={<Update />} />
        <Route exact path='/view/:id' element={<View />} />
      </Routes>
      
    </div>
  );
}

export default App;