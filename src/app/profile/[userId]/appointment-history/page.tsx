"use client";
import { fetchAppointmentHistory } from "@/app/actions/appointmentAction";
import TableComponent from "@/components/common/Table";
import { Header } from "@/types/table";
import { useParams } from "next/navigation";
import React from "react";

const AppointmentHistoryPage = () => {
  const { userId } = useParams() as { userId: string };

  const headers: Header = {
    name: "Prescription",
    properties: [
      {
        id: "name",
        columnName: "Doctor's Name",
        type: "String",
        tooltip: true
      },
      {
        id: "description",
        columnName: "Description",
        type: "String",
        tooltip: true
      },
      { id: "date", columnName: "Date of treatment", type: "String" },
      { id: "start_end_time", columnName: "Time of treatment", type: "String" }
    ]
  };

  const fetchTableData = async () => {
    const response = await fetchAppointmentHistory(userId);
    return response?.data?.previous_appointments || [];
  };

  return (
    <TableComponent
      isClickable
      headers={headers}
      fetchTableData={fetchTableData}
    />
  );
};

export default AppointmentHistoryPage;
