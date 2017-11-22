// @flow

import { WebStatus } from './web-status.type';


export type WebCall = {
  +status: WebStatus.NotCalled | WebStatus.Loading | WebStatus.Success;
} | {
  +status: WebStatus.Error,
  +error: any;
};

