import { AnyAction } from 'redux';

// We have some type matchable that is going to take a generic action creator function that returns AnyAction (our action creators return actions...makes sense and is how it is currently set up). It has some type that can be equivalent to a type or anything else and has a bunch of other properties that could be anything.

// And this AC is technically an object that returns any type.

type Matchable<AC extends () => AnyAction> = AC & {
  // Reaches into the action, gets the type value and takes type off of that value and sets it to the type
  type: ReturnType<AC>['type'];

  // Also want a match method that takes the action that we recieve and compares it against our type; this will narrow our type down (type predicate function to narrow the scope of the type down)
  match(action: AnyAction): action is ReturnType<AC>;
};

// Function overload which will use this matchable type and the passed in action creator to create this new object

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(type: T, P: void): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return {
    type,
    payload,
  };
}
