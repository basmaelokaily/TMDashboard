import React from "react";
import { useGetTasksQuery } from "../../Shared/redux/services/Task";

export const ViewTasks = () => {
  const { data } = useGetTasksQuery({}); // Empty object
  console.log(data);
  return <div>ViewTasks</div>;
};
