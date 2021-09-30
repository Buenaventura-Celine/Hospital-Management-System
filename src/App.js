import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Navbar from './components/Navbar'
import CreateScreen from './screens/CreateScreen'
import EditScreen from './screens/EditScreen'
import HealthListScreen from './screens/HealthListScreen'

function App() {
  return (
    <Router>
      <Navbar/>
      <Route path='/' component={HealthListScreen} exact/>
      <Route path='/edit/:id' component={EditScreen} exact/>
      <Route path='/create' component={CreateScreen} exact/>
    </Router>
  );
}

export default App;
