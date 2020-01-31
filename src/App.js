import React from 'react';
import Nav from './Components/Nav/Nav';
// import Auth from './Components/Auth/Auth';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Post from './Components/Post/Post';
// import Form from './Components/Form/Form';
import routes from './routes';
import {withRouter} from 'react-router-dom';
import './App.css';

function App(props) {
  return (
    <div className="App">
        {props.location.pathname === '/' ? (<>
          {routes}
        </>) : (<>
          <Nav />
          {routes}
        </>)}
    </div>
  );
}

export default withRouter(App);
