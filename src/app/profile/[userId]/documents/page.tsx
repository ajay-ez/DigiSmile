"use client";
import { fetchUserPrescription } from "@/app/actions/profileAction";
import TableComponent from "@/components/common/Table";
import { Header } from "@/types/table";
import { useParams } from "next/navigation";
import React from "react";

const UserDocuments = () => {
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
        id: "prescription",
        columnName: "Prescription",
        type: "String",
        tooltip: true
      },
      { id: "problem", columnName: "Problem", type: "String", tooltip: true },
      { id: "date", columnName: "Date of treatment", type: "String" },
      { id: "document", columnName: "Download", type: "Download" }
    ]
  };

  const fetchTableData = async () => {
    const response = await fetchUserPrescription(userId);
    return response?.data?.medical_records || [];
  };

  return (
    <TableComponent
      isClickable
      headers={headers}
      fetchTableData={fetchTableData}
    />
  );
};

export default UserDocuments;
