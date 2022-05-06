export const loggerMiddleware = store => next => action => {
  // if (!action.type) {
  //   return next(action);
  // }

  // console.log('Previous State: ');
  // const prevState = store.getState();
  // console.log({ prevState });
  // console.info('Dispatching action: ');
  // console.info(action.type);

  // const result = next(action);
  // console.log('Next state: ');
  // const nextState = store.getState();

  // console.info({ nextState });
  // // console.groupEnd();

  // return result;

  console.log('will dispatch', action);
  console.log('previous state', store.getState());
  const returnValue = next(action);
  console.log('return value:', returnValue);
  console.log('after state:', store.getState());
  return returnValue;
};
