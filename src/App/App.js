import React from 'react';
import './App.scss';
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
import Review from '../Components/Review/Review';
import SingleReview from '../Components/SingleReview/SingleReview';

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
                <Route path='/bookReview/:id/:goodReadsBookId/:userId' component={SingleReview} />                
                <Route path='/challenge' component={Challenge} />
                <Route path='/review' component={Review} />
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
