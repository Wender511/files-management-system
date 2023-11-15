import { InboxOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd';
import {
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  Upload,
  message,
} from 'antd';
import { useEffect, useState } from 'react';

import { EmployeesProp } from 'src/types';

type Props = {
  isOpen: boolean;
  onSuccess: (values: any) => void;
  onCancel: () => void;
  editingProduct: EmployeesProp | null;
  modalType: 'add' | 'edit' | null;
};
const AddModal = (props: Props) => {
  const { isOpen, onCancel, onSuccess, modalType, editingProduct } = props;
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const selectGender = (
    <Select defaultValue='other'>
      <Select.Option value='male'>male</Select.Option>
      <Select.Option value='female'>female</Select.Option>
      <Select.Option value='other'>other</Select.Option>
    </Select>
  );
  const handleSubmitForm = async () => {
    try {
      const values = await form.validateFields();
      onSuccess({ ...values });
    } catch (error) {}
  };
  useEffect(() => {
    form.resetFields();
    if (modalType === 'edit' && editingProduct) {
      form.setFieldsValue(editingProduct);
    }
  }, [modalType, editingProduct?._id]);
  return (
    <Modal
      title={`${modalType === 'edit' ? 'Sửa' : 'Thêm'} sản phẩm`}
      okText={`${modalType === 'edit' ? 'Lưu' : 'Thêm mới'}`}
      cancelText='Hủy'
      open={isOpen}
      onOk={handleSubmitForm}
      onCancel={onCancel}
      width={800}
      destroyOnClose
      className='add-product-modal'
    >
      <Form form={form} layout='vertical' className='flex flex-col gap-y-4'>
        <Card size='small' title='Thông tin chung'>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              {modalType === 'edit' ? (
                <Form.Item label='Id nhân viên' name={'_id'}>
                  <Input placeholder='Id nhân viên' disabled />
                </Form.Item>
              ) : null}
              <Form.Item
                label='Tên nhân viên'
                rules={[
                  { required: true, message: 'Vui lòng nhập tên nhân viên' },
                ]}
                name={'name'}
              >
                <Input placeholder='Tên nhân viên' tabIndex={1} />
              </Form.Item>
              <Form.Item
                label='Năm sinh'
                rules={[{ required: true, message: 'Vui lòng nhập năm sinh' }]}
                name={'birth'}
              >
                <Input placeholder='Năm sinh' tabIndex={2} />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label='Giới tính'
                name={'gender'}
                rules={[{ required: true, message: 'Vui lòng chọn giới tính' }]}
              >
                <Select>
                  <Select.Option value='male'>male</Select.Option>
                  <Select.Option value='female'>female</Select.Option>
                  <Select.Option value='other'>other</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label='Địa chỉ'
                name={'address'}
                rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
              >
                <Input placeholder='Khối lượng' tabIndex={4} />
              </Form.Item>
              <Form.Item
                label='Số điện thoại'
                name={'phone'}
                rules={[
                  { required: true, message: 'Vui lòng nhập số điện thoại' },
                ]}
              >
                <Input placeholder='Số điện thoại' tabIndex={5} />
              </Form.Item>
            </Col>
          </Row>
        </Card>
        {/* <Card size='small' title='Giá sản phẩm'>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Form.Item
                label='Giá vốn'
                name='giaVon'
                rules={[{ required: true, message: 'Vui lòng nhập giá vốn' }]}
              >
                <InputNumber
                  placeholder='Giá vốn'
                  tabIndex={7}
                  formatter={value => formatPriceInput(value)}
                  className='w-full'
                  onChange={value => {
                    setShowProfit(false);
                    setCostValue(Number(value));
                  }}
                  value={costValue}
                  addonAfter='VNĐ'
                  onBlur={handleShowProfit}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label='Giá bán'
                name='giaBan'
                rules={[{ required: true, message: 'Vui lòng nhập giá bán' }]}
              >
                <InputNumber
                  placeholder='Giá bán'
                  tabIndex={8}
                  formatter={value => formatPriceInput(value)}
                  className='w-full'
                  onChange={value => {
                    setShowProfit(false);
                    setPriceValue(Number(value));
                  }}
                  value={priceValue}
                  addonAfter='VNĐ'
                  onBlur={handleShowProfit}
                />
              </Form.Item>
            </Col>
          </Row>
        </Card> */}
      </Form>
    </Modal>
  );
};

export default AddModal;
