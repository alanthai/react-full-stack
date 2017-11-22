import { Table } from '../../utils/table.class';
import { UserGroup } from '../../types/user-group.type';


export function fakeEmployee(name) {
  return {
    name,
    email: `${name.toLowerCase().replace(/\s_/g, '.')}@example.com`,
    group: UserGroup.Employee,
    lastReviewed: (new Date()).toISOString()
  };
}

export const employeesMock = new Table([
  fakeEmployee('John Doe'),
  fakeEmployee('Jane Smith'),
  fakeEmployee('Joe Shmoe'),
]);
