import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';
import { loadUser } from './actions/authActions';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavbar />
        <div className="App">
        </div>
      </Provider>
    );
  }
}

export default App;
