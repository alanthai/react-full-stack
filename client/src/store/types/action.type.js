// @flow

import { WebStatusType } from './web-status.type';


/**
 * Action is similar to a Flux-Standard-Action, except instead of an error flag,
 * it has a status property that represents all possible states:
 * NotCalled, Loading, Success, and Error
 *
 * The WebStatus component can be created to act like a state machine to represent each state
 */
export interface _Action<T, P, M> {
  type: T;
  payload?: P;
  status?: WebStatusType;
  meta?: M;
}

// For sake of time, use a generic action
export type Action = _Action<string, any, any>;
