import React from 'react';
import './assestss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
