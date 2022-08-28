import rootSaga from './sagas';

import reducers from './reducers'
import createSagaMiddleware from 'redux-saga';

import {applyMiddleware, createStore} from 'redux';




const sagaMiddleWare = createSagaMiddleware();

export const configStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleWare)
  );
  sagaMiddleWare.run(rootSaga);
  return store;
};
