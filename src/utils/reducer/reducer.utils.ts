import { AnyAction } from 'redux';

type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>['type'];
  match(action: AnyAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => AnyAction>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;

  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

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

// // We have some type matchable that is going to take a generic action creator function that returns AnyAction (our action creators return actions...makes sense and is how it is currently set up). It has some type that can be equivalent to a type or anything else and has a bunch of other properties that could be anything.

// And this AC is technically an object that returns any type (well it returns an object at least)

// type Matchable<AC extends () => AnyAction> = AC & {
//   // Reaches into the action, gets the type value and takes type off of that value and sets it to the type
//   type: ReturnType<AC>['type'];

//   // Also want a match method that takes the action that we recieve and compares it against our type; this will narrow our type down (type predicate function to narrow the scope of the type down)
//   match(action: AnyAction): action is ReturnType<AC>;
// };

// // The idea is to return back a modified version of our action creator functions, but it has the match method and the type on it

// // Function overload which will use this matchable type and the passed in action creator to create this new object. Creating the with matcher utility function that receives some action creator in order to create a new matchable type our of that action creator

// // Overload this function with the types of ACs that we will receive

// // Might receive an AC that has no parameters and returns back an action, and we know that this action's type value is always going to be a string; we are also going to receive the action creator function as the literal parameter that we receive. What we are going to get back is a matchable object of that type AC that we pass in.

// export function withMatcher<AC extends () => AnyAction & { type: string }>(
//   actionCreator: AC
// ): Matchable<AC>;

// // All of our action creators can receive any amount of arguments, that is not the purpose of what we care about. We care about returning an action from each of these action creators, that is their purpose. So now we need to account for the ACs that could receive any number of arguments.

// // This is the one place where it is useful to use the any property because we don't know, it could be anything.

// export function withMatcher<
//   AC extends (...args: any[]) => AnyAction & { type: string }
// >(actionCreator: AC): Matchable<AC>;

// // Now we write the actual function itself...this function receives some action creator, which is a function. And this function could be any type of function, receive any kind of arguments, return any kind of action, so we keep it generic. We have safeguards above that extend what the function will be. The below is the implementation of the function in JS and the others are the type overloading for the function that we have already done.

// export function withMatcher(actionCreator: Function) {
//   //And their must be a type value because these AC functions return back some action, and every action MUST have a type value
//   const type = actionCreator().type;

//   // We apply this object on the action creator. We give it the type value as well as the match function. This function performs the check - that the action type of the passed in action is equal to the type itself. The match definition we have also already defined above, which receivees some action and it type narrows down the argument. If it passes, then this action that we receive narrows itself from any action to the return type of our action creator.
//   return Object.assign(actionCreator, {
//     type,
//     match(action: AnyAction) {
//       return action.type === type;
//     },
//   });
// }

// // The main idea is that we are extracting the type off of the action that comes out of the action creator. And we are using these to do double-duty so these action creator functions can also match actions inside of our reducer.
