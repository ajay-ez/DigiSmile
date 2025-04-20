"use client";
import {
  fetchAppointmentHistory,
  fetchUpcomingAppointment
} from "@/app/actions/appointmentAction";
import TableComponent from "@/components/common/Table";
import { Header } from "@/types/table";
import { useParams } from "next/navigation";
import React from "react";

const UpcomingAppointmentPage = () => {
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
      { id: "start_end_time", columnName: "Time of treatment", type: "String" },
      { id: "location", columnName: "Location", type: "String" },
      { id: "cancel", columnName: "Cancel Appointment", type: "Cancel" },
      {
        id: "reschedule",
        columnName: "Reschedule Appointment",
        type: "Reschedule"
      }
    ]
  };

  const fetchTableData = async () => {
    const response = await fetchUpcomingAppointment(userId);
    return response?.data?.upcoming_appointments || [];
  };

  return (
    <TableComponent
      isClickable
      headers={headers}
      fetchTableData={fetchTableData}
    />
  );
};

export default UpcomingAppointmentPage;
