import './App.css';
import NavBar from './Component/NavBar';
import Body from './Component/Body';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EachCountry from './Component/EachCountry';


function App() {
  return (
    <Router>

    <div className="App">
      
     <NavBar/>
     <div className="api">
      <Switch>
        <Route exact path="/">
          <Body/>
        </Route>

        <Route path='/:name'>
           <EachCountry/>
        </Route>
       
      </Switch>
     </div>
    </div>
    </Router>
  );
}

export default App;
