import { Button, Space, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import * as xlsx from 'xlsx';
import { UploadProps } from 'antd/lib';
import { enqueueSnackbar } from 'notistack';
import { KeyedMutator } from 'swr';

import BasicTable from 'src/components/BasicTable/BasicTable';
import { EmployeesProp } from 'src/types';
import TableAction from 'src/components/TableAction/tableAction';
import { employeeApi } from 'src/api/empolyeeApi';

import AddModal from './AddModal';

type Props = {
  data: EmployeesProp[];
  mutate: KeyedMutator<any>;
};
function EmployeesList({ data, mutate }: Props) {
  const [employees, setEmployees] = useState<EmployeesProp[]>(data);
  const [uploading, setUploading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'add' | 'edit' | null>(null);
  const [editingEmployee, setEditingEmployee] = useState<EmployeesProp | null>(
    null,
  );
  const columns: ColumnsType<EmployeesProp> = [
    { key: 1, title: 'ID', width: 50, dataIndex: '_id' },
    { key: 2, title: 'Tên', width: 50, dataIndex: 'name' },
    { key: 3, title: 'Giới tính ', width: 50, dataIndex: 'gender' },
    { key: 4, title: 'Năm sinh', width: 100, dataIndex: 'birth' },
    { key: 5, title: 'Địa chỉ', width: 100, dataIndex: 'address' },
    { key: 6, title: 'Số điện thoại', width: 100, dataIndex: 'phone' },
    {
      title: 'Action',
      key: 'action',
      width: 80,
      render: (record: EmployeesProp) => {
        return (
          <TableAction
            onDelete={() => handleDeleteProduct(record._id!)}
            onEdit={() => handleEditProduct(record)}
          />
        );
      },
      align: 'center',
    },
  ];
  const handleTableChange = (pagination: any) => {
    console.log('product list call');
  };
  const handleAddEmployee = () => {
    setModalType('add');
    setIsModalOpen(true);
  };
  const uploadProps: UploadProps = {
    name: 'excel-file',
    accept: '.xlsx, .xls',
    showUploadList: false,
    multiple: false,
    maxCount: 1,
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info);
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
  const handleModalOk = async (values: EmployeesProp) => {
    try {
      if (modalType === 'add') {
        await employeeApi.postEmployee(values);
        enqueueSnackbar('Thêm sản phẩm thành công', { variant: 'success' });
        setIsModalOpen(false);
        await mutate('/api/v1/employee');
      }
      if (modalType === 'edit') {
        const { _id, ...rest } = values;
        await employeeApi.patchEmployee(values._id, rest);
        enqueueSnackbar('Sửa sản phẩm thành công', { variant: 'success' });
        setIsModalOpen(false);
        await mutate('/api/v1/employee');
      }
    } catch (error) {
      console.log('error:', error);
      enqueueSnackbar('Có lỗi xảy ra', { variant: 'error' });
    }
    setIsModalOpen(false);
  };
  const handleModalCancel = () => {
    setIsModalOpen(false);
  };
  const handleEditProduct = (record: EmployeesProp) => {
    setModalType('edit');
    setEditingEmployee(record);
    setIsModalOpen(true);
  };
  const handleDeleteProduct = async (_id: string) => {
    await employeeApi.deleteEmployee(_id);
    mutate('/api/san-pham?idCh=4');
    enqueueSnackbar('Xóa sản phẩm thành công', { variant: 'success' });
  };
  return (
    <Space className='w-full' direction='vertical'>
      <BasicTable
        columns={columns}
        data={employees}
        extra={
          <>
            <Button type='default'>Export</Button>
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />} loading={uploading}>
                Import
              </Button>
            </Upload>
            <Button type='primary' onClick={handleAddEmployee}>
              Thêm nhân viên
            </Button>
          </>
        }
        onChange={handleTableChange}
      />
      <AddModal
        isOpen={isModalOpen}
        onSuccess={handleModalOk}
        onCancel={handleModalCancel}
        editingProduct={editingEmployee}
        modalType={modalType}
      />
    </Space>
  );
}

export default EmployeesList;
