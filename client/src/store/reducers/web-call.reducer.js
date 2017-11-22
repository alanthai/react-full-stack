import { WebStatus } from '../types/web-status.type';
import type { WebCall } from '../types/web-call.type';


export function webCallReducer([loading, success, error]) {
  return (state: WebCall = { status: WebStatus.NotCalled }, action): WebCall => {
    switch (action.type) {
      case loading:
        return { status: WebStatus.Loading };
      case success:
        return { status: WebStatus.Success };
      case error:
        return { status: WebStatus.Error, error: action.payload };
      default:
        return state;
    }
  }
}

