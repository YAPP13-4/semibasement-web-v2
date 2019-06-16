import "regenerator-runtime/runtime";
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './sagas';
import reducer from './reducers';

export default (() => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(saga);

  return store;
})();
