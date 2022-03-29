import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { getAttractions } from './actions/attraction-action';
import thunk from 'redux-thunk';

//Déclaration du store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// Des que le store est monté on envoie getAttractions
store.dispatch(getAttractions());

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

