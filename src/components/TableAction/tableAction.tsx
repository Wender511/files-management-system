import { Button, Popconfirm, Space, Tooltip, message } from 'antd';
import { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';

type Props = {
  onEdit?: () => void;
  onView?: () => void;
  onDelete?: () => void;
};
const TableAction = (props: Props) => {
  const { onEdit, onView, onDelete } = props;
  const [open, setOpen] = useState(false);
  return (
    <Space align='center' direction='horizontal' size={'small'}>
      {onEdit && (
        <Tooltip title='Chỉnh sửa'>
          <Button
            type='text'
            className='text-blue-600 hover:!text-blue-500'
            icon={<AiOutlineEdit className='text-xl' />}
            onClick={onEdit}
          />
        </Tooltip>
      )}
      {onView && (
        <Tooltip title='Xem'>
          <Button
            type='text'
            className='text-blue-600 hover:!text-blue-500'
            icon={<AiOutlineEye className='text-xl' />}
            onClick={onView}
          />
        </Tooltip>
      )}
      {onDelete && (
        <Tooltip title='Xóa'>
          <Popconfirm
            title='Delete the task'
            description='Are you sure to delete this task?'
            onConfirm={() => {
              onDelete();
              setOpen(false);
            }}
            onCancel={() => {
              message.error('Click on No');
              setOpen(false);
            }}
            okText='Yes'
            cancelText='No'
          >
            <Button
              type='text'
              danger
              icon={<AiOutlineDelete className='text-xl' />}
            />
          </Popconfirm>
        </Tooltip>
      )}
    </Space>
  );
};

export default TableAction;
