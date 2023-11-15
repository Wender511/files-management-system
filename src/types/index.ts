export interface rootReducer {
  checkLogin: boolean;
}
export interface EmployeesProp {
  _id: string;
  name: string;
  birth: number;
  gender: string;
  address: string;
  phone: string;
  createdAt?: string;
  updatedAt?: string;
}
