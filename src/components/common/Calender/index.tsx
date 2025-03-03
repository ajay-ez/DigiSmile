"use client";

import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./calender.scss";

interface DatePickerProps {}
const DatePickerComponent: React.FC<DatePickerProps> = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="date-picker">
      <h4>Select Date and Time</h4>
      <div className="divider"></div>

      <DatePicker
        selected={selectedDate}
        onChange={(date: any) => setSelectedDate(date)}
        minDate={new Date()}
        inline
      />
    </div>
  );
};

export default DatePickerComponent;
