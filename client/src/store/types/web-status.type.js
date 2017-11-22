export const WebStatus = {
  NotCalled: 'webStatus/NotCalled',
  Loading: 'webStatus/Loading',
  Success: 'webStatus/Success',
  Error: 'webStatus/Error',
};

export type WebStatusType = $Keys<typeof WebStatus>;
