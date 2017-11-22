// @flow

export const UserGroup = {
  Admin: 'Admin',
  Employee: 'Employee',
};

export type UserGroupType = $Keys<typeof UserGroup>;
