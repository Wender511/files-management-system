import { Spin } from 'antd';

import useEmployees from 'src/api/empolyeeApi';
import EmployeesList from 'src/components/pages/Employees/EmployeeList';
function EmpolyeesPage() {
  const { data: employeesData, mutate, error } = useEmployees();
  if (employeesData && employeesData?.data)
    return <EmployeesList data={employeesData.data} mutate={mutate}></EmployeesList>;
  return (
    <>
      <Spin></Spin>
    </>
  );
}

export default EmpolyeesPage;
