// https://github.com/diegohaz/arc/wiki/Redux-modules
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware, routerActions } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger';
import { createHashHistory } from 'history';
import middlewares from '../departments/middlewares'
import rootReducer from '../departments/reducer'
import sagas from '../departments/sagas'

const history = createHashHistory();

const configureStore = (initialState, services = {}) => {
  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  middleware.push(...middlewares);

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  // Logging Middleware
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });
  middleware.push(logger);

  // Router Middleware
  const router = routerMiddleware(history);
  middleware.push(router);

  // Redux DevTools Configuration
  const actionCreators = {
    ...routerActions,
  };

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =  compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  initialState = {}

  const store = createStore(rootReducer, initialState, enhancer);
  let sagaTask = sagaMiddleware.run(sagas)

  return store
}

export default { configureStore, history }
