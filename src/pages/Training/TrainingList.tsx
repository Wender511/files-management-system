/** @format */

import { Button, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import BasicTable from "src/components/BasicTable/BasicTable";
import TableAction from "src/components/TableAction/tableAction";
import { TrainingProps } from "src/types";
import { KeyedMutator } from "swr";

type Props = {
  data: TrainingProps[];
  mutate: KeyedMutator<any>;
};
const handleDelete = async (id: string) => {
  alert("xóa file");
};

const handleEdit = async (record: TrainingProps) => {
  alert("sửa file");
};

const TrainingList = ({ data, mutate }: Props) => {
  const [file, setFile] = useState<TrainingProps[]>(data);
  const columns: ColumnsType<TrainingProps> = [
    { key: 1, title: "ID", width: 50, dataIndex: "_id" },
    { key: 2, title: "Nội dung ", width: 50, dataIndex: "content" },
    { key: 3, title: "Tổ chức", width: 50, dataIndex: "organizingUnit" },
    { key: 4, title: "Huấn luyện viên", width: 100, dataIndex: "trainer" },
    { key: 5, title: "Ngày bắt đầu", width: 100, dataIndex: "createdAt" },
    { key: 6, title: "Ngày kết thúc", width: 100, dataIndex: "updatedAt" },
    {
      title: "Action",
      key: "action",
      width: 80,
      render: (record: TrainingProps) => {
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

export default TrainingList;
