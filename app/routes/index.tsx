import { PhoneFilled, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "@remix-run/react";
import { Button, List, Space, Typography } from "antd";
import { Filter } from "components/Filter";
import { EmployeeRole } from "data/store";
import { useAppSelector } from "hooks";

const { Text, Title } = Typography;

export default function Index() {
  
  const filter = useAppSelector((state) => state.filter);
  const data = useAppSelector((state) => state.employees);
  const navigate = useNavigate();

  const dataList = () => {
    
    return data.filter((e) => {
      return e.isArchive === filter.isArchive
    }).filter((e) => filter.role ? e.role === filter.role : e)
    .sort((a, b) => {
      return filter.sort ? (
        filter.sort === 'birthday' ? 
        // @ts-ignore
        (new Date(a.birthday.split('.').reverse()) - new Date(b.birthday.split('.').reverse()))
        // @ts-ignore
        : a[filter.sort].localeCompare(b[filter.sort])
      ) : false
    })
  }

  return (
    <div className="employees-wrap">
      <Title level={2}>Список сотрудников</Title>
      <Filter />
      <List
        bordered
        dataSource={dataList()}
        className="employees-list"
        renderItem={({id, role, name, phone, birthday}) => 
          <List.Item 
            onClick={()=>navigate(`/edit/${id}`)}
            className="employees-list_item"
          >
            <Text strong>
              <Space>
                <UserOutlined />{name} 
                <Text type="secondary">
                  [{EmployeeRole[role]}]
                </Text>
              </Space>
            </Text>
            <Space>
              <PhoneFilled />{phone}
            </Space>
          </List.Item>
        }
      />
      <Button onClick={()=>navigate('/create')}>Добавить сотрудника</Button>
    </div>
  );
}
