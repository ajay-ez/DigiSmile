"use client";
import { fetchAppointmentList } from "@/app/actions/appointmentAction";
import TableComponent from "@/components/common/Table";
import { Header } from "@/types/table";
import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./calender.scss";
import { format } from "date-fns";

const CheckAppointmentPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [refetch, setRefetch] = useState(false);

  const headers: Header = {
    name: "Prescription",
    properties: [
      {
        id: "patient",
        columnName: "Patient's Name",
        type: "String",
        tooltip: true
      },
      {
        id: "description",
        columnName: "Description",
        type: "String",
        tooltip: true
      },
      { id: "location", columnName: "Location", type: "String" },
      { id: "phone_number", columnName: "Phone Number", type: "String" },
      { id: "start_end_time", columnName: "Time of treatment", type: "String" },
      {
        id: "doctor_reshcedule",
        columnName: "Reschedule",
        type: "DoctorSchedule"
      }
    ]
  };

  const handleDateChange = (date: any) => {
    setRefetch(true);
    setStartDate(date);
  };

  const fetchTableData = async (payload: any) => {
    const formattedDate = format(startDate, "yyyy-MM-dd");
    const response = await fetchAppointmentList(formattedDate);
    setRefetch(false);
    return response?.data?.appointments || [];
  };

  const handleNextClick = () => {
    setRefetch(true);
    const nextMonth = new Date(startDate);
    nextMonth.setDate(startDate.getDate() + 1);
    setStartDate(nextMonth);
  };

  const handlePrevClick = () => {
    setRefetch(true);
    const prevMonth = new Date(startDate);
    prevMonth.setDate(startDate.getDate() - 1);
    setStartDate(prevMonth);
  };

  return (
    <Flex flexDir={"column"}>
      <Flex className="appointment-date-picker-container">
        <Flex className="appointment-date-picker">
          <button className="prev_button" onClick={handlePrevClick}>
            {"◄"}
          </button>
          <DatePicker selected={startDate} onChange={handleDateChange} />
          <button className="next_button" onClick={handleNextClick}>
            {"►"}
          </button>
        </Flex>
      </Flex>

      <TableComponent
        isClickable
        headers={headers}
        refetch={refetch}
        fetchTableData={fetchTableData}
      />
    </Flex>
  );
};

export default CheckAppointmentPage;
