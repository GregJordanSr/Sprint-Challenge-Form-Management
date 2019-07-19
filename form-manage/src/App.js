import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import Data-List from './components/Data-List'
import { Route, Link, Redirect } from 'react-router-dom'
import './App.css';

function App() {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />  
  );


  return (
    <div className="App">
      <header className="App-header">
        <RegistrationForm />
      </header>
    </div>
  );
}

export default App;
