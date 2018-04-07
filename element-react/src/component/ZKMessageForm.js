import React from 'react'
import { Button, Modal, Form, Input, Radio ,DatePicker } from 'antd';

const FormItem = Form.Item;
const InputGroup = Input.Group;
const { TextArea } = Input;

const CollectionCreateForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="新增卡机信息登记"
          okText="确定"
          cancelText="取消"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form>
            <FormItem>
              {getFieldDecorator('dept')(
                <Input placeholder="请输入使用部门"  size="small"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(
                <InputGroup compact size="small">
                  <Input style={{ width: '30%' }} placeholder="请输入设备编号"/>
                  <Input style={{ width: '70%' }} placeholder="请输入设备名称"/>
                </InputGroup>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('description')(
                <InputGroup compact size="small">
                  <Input style={{ width: '30%' }} placeholder="请输入IP地址"/>
                  <Input style={{ width: '70%' }} placeholder="请输入MAC地址"/>
                </InputGroup>
              )}
            </FormItem>
            <FormItem className="collection-create-form_last-form-item">
              {getFieldDecorator('modifier', {
                initialValue: 'public',
              })(
                <InputGroup compact size="small">
                  <Input style={{ width: '30%' }} placeholder="请输入供应商名称"/>
                  <DatePicker style={{ width: '40%' }} placeholder="请选择安装日期"/>
                  <Input style={{ width: '30%' }} placeholder="请输入保修有效期" />
                </InputGroup>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('ysbill')(
                <Input placeholder="请输入验收申请单号" size="small" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('rdbill')(
                <Input placeholder="请输入弱电申请单号"  size="small"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('place')(
                <TextArea placeholder="请输入安装位置" autosize autosize={{ minRows: 2, maxRows: 6 }} />
              )}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

class ZKMessageForm extends React.Component{
  state = {
    visible: false,
  };
  showModal = () => {
    this.setState({ visible: true });
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  }
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  render(){
    return(
      <div>
      <Button type="primary" icon="plus-circle-o" size="small" onClick={this.showModal}>新增</Button>
      <CollectionCreateForm
        wrappedComponentRef={this.saveFormRef}
        visible={this.state.visible}
        onCancel={this.handleCancel}
        onCreate={this.handleCreate}
      />
    </div>
    )
  }
}
export default ZKMessageForm
