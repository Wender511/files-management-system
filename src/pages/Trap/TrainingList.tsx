/** @format */

import { Button, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import BasicTable from "src/components/BasicTable/BasicTable";
import TableAction from "src/components/TableAction/tableAction";
import { TrapProps } from "src/types";
import { KeyedMutator } from "swr";

type Props = {
  data: TrapProps[];
  mutate: KeyedMutator<any>;
};
const handleDelete = async (id: string) => {
  alert("xóa trap");
};

const handleEdit = async (record: TrapProps) => {
  alert("sửa trap");
};

const Traplist = ({ data, mutate }: Props) => {
  const [trap, setTrap] = useState<TrapProps[]>(data);
  const columns: ColumnsType<TrapProps> = [
    { key: 1, title: "ID", width: 50, dataIndex: "_id" },
    { key: 2, title: "Vị trí", width: 50, dataIndex: "location" },
    { key: 3, title: "Ngày đặt", width: 50, dataIndex: "date" },
    { key: 4, title: "Số lượng", width: 100, dataIndex: "traps" },
    { key: 5, title: "Kết quả", width: 100, dataIndex: "result" },
    { key: 6, title: "Ghi chú", width: 100, dataIndex: "note" },
    {
      title: "Action",
      key: "action",
      width: 80,
      render: (record: TrapProps) => {
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
        data={trap}
        extra={null}
        onChange={() => {}}
      />
    </Space>
  );
};

export default Traplist;
