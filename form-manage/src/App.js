import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import DataList from './components/DataList'
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
          <Redirect to="/" />
        )
      }
    />  
  );


  return (
    <div className="App">
    <div><Link to="/data-list">DataList</Link></div>
   
      <header className="App-header">
      <PrivateRoute exact path="/data-list" component={DataList}/>
        <Route exact path="/" component={RegistrationForm}/>
      </header>
    </div>
  );
}

export default App;
