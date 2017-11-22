import { http } from '../../services/http.service';


export const employeesService = {
  getList() {
    return http.get('/users');
  },

  get(employeeId: string) {
    return http.get(`/users/${employeeId}`);
  },

  add(employeeForm) {
    return http.post('/users', employeeForm);
  },

  remove(employeeId: string) {
    return http.delete(`/users/${employeeId}`);
  },

  update(employee) {
    return http.put(`/users/${employee.id}`, employee);
  },
};
