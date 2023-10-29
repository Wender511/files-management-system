import { useState } from "react";
import { FileData } from "src/interface/file";
import BasicTable from "../BasicTable";
import { Button } from "antd";
type Props = {
    fileFake: FileData[];
  };
const FileList = ({fileFake}: Props) => {
  const [filesData, setfileData] = useState<FileData[]>(fileFake);
    return ( 
      <>
      <BasicTable
          // columns={filesData.length}
          data={filesData}
          extra={
            <>
              <Button type='default'>Export</Button>
              <Button>Import</Button>
              <Upload {...uploadProps}>
                <Button icon={} loading={uploading}>
                  Import
                </Button>
              </Upload>
              <Button type='primary' onClick={handleAddProduct}>
                Thêm hàng
              </Button>
            </>
          }
          onChange={handleTableChange}
          pagination={{
            current: 1,
            pageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ['10', '15', '20'],
            total: 48,
          }}
      />
      </>
     );
}
 
export default FileList;
