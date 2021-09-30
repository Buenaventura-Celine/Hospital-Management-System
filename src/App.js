import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;
