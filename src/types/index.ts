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

export interface FileProps {
  _id: string;
  __v: number;
  url: string;
  type: string;
  status: string;
  owner: string;
  name: string;
  delete: boolean;
  createdAt?: string;
  updatedAt?: string;
}
