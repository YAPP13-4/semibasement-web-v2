import React from 'react';
import ReactDOM from 'react-dom';
import { EntryRoute } from 'presentation/routes';
import store from 'presentation/redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <EntryRoute />
  </Provider>, 
document.getElementById('root'));
