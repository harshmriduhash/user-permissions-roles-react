import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { loadUser } from './actions/authActions';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingComponent from './components/Landing';
import MainComponent from './components/Main'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppNavbar />
          <Switch>
            <Route path="/home" exact component={LandingComponent} />
            <Route to="/" component={MainComponent} />
            <Redirect to="/" component={MainComponent} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
