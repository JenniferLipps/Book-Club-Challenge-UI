import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import MyNavbar from '../Components/MyNavbar/MyNavbar';
import Home from '../Components/Home/Home';
import Library from '../Components/Library/Library';
import Challenge from '../Components/Challenge/Challenge';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <MyNavbar />
          <div className="container">
            <div className="row">
              <Switch>
                <Route path='/home' component={Home} />
                <Route path='/library' component={Library} />
                {/* <Route path='/library/:id' component={IndividualBook} /> */}
                <Route path='/challenge' component={Challenge} />
                <Redirect from="*" to="/home" />
              </Switch>
            </div>
          </div>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
