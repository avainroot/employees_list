import { EditForm } from "components/EditForm";
import { Typography } from "antd";
import { useParams } from "@remix-run/react";
import { useAppSelector } from "hooks";

const { Title } = Typography;

export default function Employee() {

  let { employee } = useParams();
  const data = useAppSelector((state) => state.employees).filter((e) => e.id === parseInt(employee || ''))[0];

  return(
    <div className="employees-edit">
      <Title level={2}>Редактировать сотрудника</Title>
      <EditForm initialValues={data} />
    </div>
  )
}