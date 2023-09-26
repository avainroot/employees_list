import type { FormInstance} from "antd";
import { Checkbox, Form, Select } from "antd";
import { updFilter } from "data/actions";
import { EmployeeRole } from "data/store";
import { useAppDispatch, useAppSelector } from "hooks";
import React from "react";

const { Option } = Select;

export const Filter = () => { 
  const formRef = React.useRef<FormInstance>(null);
  const filter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const handleFilterChange = (changedValues: any, allValues: any) => {
    dispatch(updFilter(allValues));
  }

  const rolesOptions = () => {
    let options: any[] = []
    for (const [key, value] of Object.entries(EmployeeRole)) {
      options.push(<Option value={key}>{value}</Option>)
    }
    return options.map((option)=>option)
  }

  return(
    <div className="employees-filter">
      <Form
        ref={formRef}
        layout="inline"
        onValuesChange={handleFilterChange}
        initialValues={filter}
      >
        <Form.Item 
          name="sort" 
        >
          <Select placeholder="Сортировать">
            <Option>Не сортировать</Option>
            <Option value="name">По имени</Option>
            <Option value="birthday">По дате рождения</Option>
          </Select>
        </Form.Item>
        <Form.Item 
          name="role" 
        >
          <Select placeholder="Должность">
            <Option>Все</Option>
            {rolesOptions()}
          </Select>
        </Form.Item>
        <Form.Item name="isArchive" valuePropName="checked">
          <Checkbox>В архиве</Checkbox>
        </Form.Item>
        {/* <Form.Item>
          <Button onClick={onReset}>Сбросить</Button>
        </Form.Item> */}
      </Form>
    </div>
  )
}