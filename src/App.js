import React, {Component} from "react"

class App extends Component {

   render() {
      return (
         <Router>
            <Route path="/" exact strict component={HomePage}/>
         </Router>
      );
   }
}
export default App;
