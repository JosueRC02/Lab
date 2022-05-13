import React from 'react';
import './assestss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
           <Route path="/" exact render = { props => (<Login {...props}/>)}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
