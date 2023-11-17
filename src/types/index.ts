/** @format */

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

export interface TrainingProps {
  _id: string;
  date: string;
  content: string;
  organizingUnit: string;
  trainer: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface DeviceProps {
  _id: string;
  code: string;
  name: string;
  quantity: number;
  origin: string;
  manufactureYear: string;
  note: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface TrapProps {
  _id: string;
  location: string;
  date: string;
  traps: number;
  result: number;
  note: string;
  createdAt?: string;
  updatedAt?: string;
}
