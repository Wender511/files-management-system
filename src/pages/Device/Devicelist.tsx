/** @format */

import { Button, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import BasicTable from "src/components/BasicTable/BasicTable";
import TableAction from "src/components/TableAction/tableAction";
import { DeviceProps } from "src/types";
import { KeyedMutator } from "swr";

type Props = {
  data: DeviceProps[];
  mutate: KeyedMutator<any>;
};
const handleDelete = async (id: string) => {
  alert("xóa file");
};

const handleEdit = async (record: DeviceProps) => {
  alert("sửa file");
};

const Devicelist = ({ data, mutate }: Props) => {
  const [device, setdevice] = useState<DeviceProps[]>(data);
  
  const columns: ColumnsType<DeviceProps> = [
    { key: 1, title: "ID", width: 50, dataIndex: "_id" },
    { key: 2, title: "Tên", width: 50, dataIndex: "name" },
    { key: 3, title: "Mã sản phẩm", width: 50, dataIndex: "code" },
    { key: 4, title: "Số lượng", width: 100, dataIndex: "quantity" },
    { key: 5, title: "Xuất xứ", width: 100, dataIndex: "origin" },
    { key: 6, title: "Ghi chú", width: 100, dataIndex: "note" },
    { key: 7, title: "Ngày sản xuất", width: 100, dataIndex: "manufactureYear" },
    { key: 8, title: "Cập nhật", width: 100, dataIndex: "createdAt" },
    {
      title: "Action",
      key: "action",
      width: 80,
      render: (record: DeviceProps) => {
        return (
          <TableAction
            onDelete={() => handleDelete(record._id!)}
            onEdit={() => handleEdit(record)}
          />
        );
      },
      align: "center",
    },
  ];
  return (
    <Space className="w-full" direction="vertical">
      <BasicTable
        columns={columns}
        data={device}
        extra={null}
        onChange={() => {}}
      />
    </Space>
  );
};

export default Devicelist;
