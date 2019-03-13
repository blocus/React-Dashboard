import React, {Component} from "react"
import Login from "views/Login/Login.jsx"
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {

   render() {
      return (
         <Router>
            <Route path="/" exact strict component={Login}/>
         </Router>
      );
   }
}
export default App;
