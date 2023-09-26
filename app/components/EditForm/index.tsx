import { useNavigate } from "@remix-run/react";
import { Button, Checkbox, Form, Input, Select } from "antd"
import { MaskedInput } from "antd-mask-input"
import { addUser, updUser } from "data/actions";
import { EmployeeRole } from "data/store"
import { useAppDispatch } from "hooks";

export const EditForm = ({initialValues}: any) => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const rolesOptions = () => {
    let options: any[] = []
    for (const [key, value] of Object.entries(EmployeeRole)) {
      options.push(<Select.Option value={key}>{value}</Select.Option>)
    }
    return options.map((option)=>option)
  }

  const onFinish = (values: any) => {
    if(initialValues) {
      dispatch(updUser(initialValues.id, values))
      navigate('/')
      return
    }
    dispatch(addUser(values))
    navigate('/')
  }

  return(
    <Form 
      layout="vertical"
      onFinish={onFinish}
      initialValues={initialValues}
    >
      <Form.Item 
        name="name" 
        label="Имя сотрудника"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
        name="phone" 
        label="Телефон"
        rules={[{ required: true }]}
      >
        <MaskedInput mask={'+7 (000) 000-0000'} />
      </Form.Item>
      <Form.Item 
        name="birthday" 
        label="Дата рождения"
        rules={[{ required: true }]}
      >
        <MaskedInput mask={'00.00.0000'} />
      </Form.Item>
      <Form.Item 
        name="role" 
        label="Должность"
        rules={[{ required: true }]}
      >
        <Select>
          {rolesOptions()}
        </Select>
      </Form.Item>
      <Form.Item initialValue={initialValues ? initialValues.isArchive : false} name="isArchive" valuePropName="checked">
        <Checkbox>В архиве</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {initialValues ? 'Сохранить' : 'Добавить'}
        </Button>
      </Form.Item>
    </Form>
  )
}