import { compose, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// root-reducer (combo of all of our reducers); like one big reducer and need this for our application to have any type of state value

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
