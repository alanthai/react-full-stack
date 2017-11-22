import { employeesMock } from './employees.mock';


export const employeesService = {
  getList() {
    return Promise.resolve(employeesMock.map);
  },

  get(userId) {
    return Promise.resolve(employeesMock.get(userId));
  },

  add(employeeForm) {
    return Promise.resolve(employeesMock.add(employeeForm));
  },

  remove(userId) {
    employeesMock.remove(userId);
    return Promise.resolve(true);
  },

  update(employee) {
    return Promise.resolve(employeesMock.update(employee));
  },
};
