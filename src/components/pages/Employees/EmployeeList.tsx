import { Button, Space, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import * as xlsx from 'xlsx';
import { UploadProps } from 'antd/lib';

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
  const handleTableChange = (pagination: any) => {
    console.log('product list call');
  };
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
  const uploadProps: UploadProps = {
    name: 'excel-file',
    accept: '.xlsx, .xls',
    showUploadList: false,
    multiple: false,

    onChange(info) {
      if (info.file.status !== 'uploading') {
        const reader = new FileReader();
        reader.onload = e => {
          const data = e.target?.result;
          const workbook = xlsx.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const json = xlsx.utils.sheet_to_json(worksheet);
          handleUpload(json);
        };
        reader.readAsArrayBuffer(info.fileList[0].originFileObj as Blob);
      }
    },
    beforeUpload(file: any) {
      console.log('file:', file);
      const isExcel =
        file.type === 'application/vnd.ms-excel' ||
        file.type ===
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      const isSize = file.size / 1024 / 1024 < 100;
      if (!isExcel) {
        message.error('Vui lòng chỉ nhập file Excel (định dạng XLS/XLSX)!');
        return false;
      }
      if (!isSize) {
        message.error('Nhập file dung lượng nhỏ hơn 100MB!');
        return false;
      }
      return false;
    },
  };
  return (
    <Space className='w-full' direction='vertical'>
      <BasicTable
        columns={columns}
        data={data}
        extra={
          <>
            <Button type='default'>Export</Button>
            <Button>Import</Button>
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />} loading={uploading}>
                Import
              </Button>
            </Upload>
            <Button type='primary' onClick={() => {}}>
              Thêm hàng
            </Button>
          </>
        }
        onChange={handleTableChange}
      />
    </Space>
  );
}

export default EmployeesList;
