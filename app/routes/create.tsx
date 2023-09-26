import { Typography } from "antd";
import { EditForm } from "components/EditForm"

const { Title } = Typography;

export default function CreateEmployee() {
  return(
    <div className="employees-edit">
      <Title level={2}>Добавить нового сотрудника</Title>
      <EditForm />
    </div>
  )
}