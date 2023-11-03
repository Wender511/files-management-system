import { Space, message } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';

import BasicTable from 'src/components/BasicTable/BasicTable';
import { EmployeesProp } from 'src/types';

type Props = {
  data: EmployeesProp[];
};
function EmployeesList({ data }: Props) {
  const [employees, setEmployees] = useState<EmployeesProp[]>(data);
  const [uploading, setUploading] = useState(false);
  const columns: ColumnsType<EmployeesProp> = [
    { key: 1, title: 'ID', width: 50, dataIndex: 'id' },
    { key: 2, title: 'Tên', width: 100, dataIndex: 'name' },
    { key: 3, title: 'Năm sinh', width: 100, dataIndex: 'birth' },
    { key: 4, title: 'Địa chỉ', width: 100, dataIndex: 'address' },
    { key: 5, title: 'Số điện thoại', width: 100, dataIndex: 'string' },
  ];
  const handleUpload = (json: any) => {
    setUploading(true);
    fetch('https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188', {
      method: 'POST',
      body: JSON.stringify(json),
    })
      .then(res => res.json())
      .then(() => {
        message.success('upload successfully.');
      })
      .catch(() => {
        message.error('upload failed.');
      })
      .finally(() => {
        setUploading(false);
      });
  };
  return (
    <Space className='w-full' direction='vertical'>
      <BasicTable columns={columns} data={data} extra={} />
    </Space>
  );
}

export default EmployeesList;
