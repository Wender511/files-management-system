/** @format */

import { Button, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import BasicTable from "src/components/BasicTable/BasicTable";
import TableAction from "src/components/TableAction/tableAction";
import { FileProps } from "src/types";
import { KeyedMutator } from "swr";

type Props = {
  data: FileProps[];
  mutate: KeyedMutator<any>;
};
const handleDelete = async (id: string) => {
  alert("xóa file");
};

const handleEdit = async (record: FileProps) => {
  alert("sửa file");
};

const Filelist = ({ data, mutate }: Props) => {
  const [file, setFile] = useState<FileProps[]>(data);
  const columns: ColumnsType<FileProps> = [
    { key: 1, title: "ID", width: 50, dataIndex: "_id" },
    { key: 2, title: "Tên", width: 50, dataIndex: "name" },
    { key: 3, title: "Chủ sở hửu", width: 50, dataIndex: "owner" },
    { key: 4, title: "Trạng thái", width: 100, dataIndex: "status" },
    { key: 5, title: "Loại", width: 100, dataIndex: "type" },
    {
      title: "Action",
      key: "action",
      width: 80,
      render: (record: FileProps) => {
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
        data={file}
        extra={null}
        onChange={() => {}}
      />
    </Space>
  );
};

export default Filelist;
