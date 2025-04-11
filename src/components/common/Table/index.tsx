"use client";

import {
  Box,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Tooltip,
  Button
} from "@chakra-ui/react";
import React, { useState, useEffect, ReactElement, useRef } from "react";
import moment from "moment";
import { Header } from "@/types/table";
import Shimmer from "./Shimmer";
import DownloadIconComponent from "@/app/Icons/DownloadIcon";
import ConfirmationModalComponent from "../ConfirmationModal";
import { cancelAppointment, fetchAvailableAppointments } from "@/app/actions/appointmentAction";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { showToastWithTimeout } from "@/redux/SharedSlice";
import RescheduleModalComponent from "../RescheduleModal";
import { useRouter } from "next/navigation";
import DoctorReschedule from "@/features/DoctorReschedule";

interface Properties {
  headers: Header;
  fetchTableData: (payload: any) => Promise<any[]>;
  hasTabs?: boolean;
  hasKpis?: boolean;
  isClickable?: boolean;
  refetch?: boolean;
  addlRightButton?: ReactElement;
  handleClick?: (data: any) => void;
  fetchAllData?: () => Promise<any[]>;
  handleSoftDelete?: (payload: any) => void;
  handleHardDelete?: (payload: any) => void;
  handleMenuChange?: (
    actionType: string,
    data: any,
    userId?: string | any
  ) => void;
}

const TableComponent = ({
  headers,
  fetchTableData,
  isClickable = false,
  handleClick,
  refetch
}: Properties) => {
  const [tableData, setTableData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const tableReference: any = useRef(null);
  const router = useRouter();
  const [confirmationModal, setConfirmationModal] = useState({
    status: false,
    appointmentId: ""
  });
  const [initialSlots, setInitialSlots] = useState([]);
  const [rescheduleModal, setRescheduleModal] = useState({
    status: false,
    appointmentId: ""
  });
  const dispatch: AppDispatch = useDispatch();

  const fetchData = async () => {
    setLoading(true);
    const payload = {};
    const data = await fetchTableData(payload);
    setTableData(data || []);
    // tableReference.current.scrollTop = 0;
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    fetchInitialSlots();
  }, []);

  const fetchInitialSlots = async () => {
    const response = await fetchAvailableAppointments({
      appointment_date: moment().format("YYYY-MM-DD"),
      location: "dc",
      showBooked: true
    });
    if (response?.success) {
      setInitialSlots(response?.data?.slotss || []);
    }
  };

  useEffect(() => {
    if (refetch === true) {
      fetchData();
    }
  }, [refetch]);

  const handleRowClick = (record: any) => {
    if (isClickable && handleClick) handleClick(record);
  };

  const handleCancel = (record: any) => {
    setConfirmationModal({
      status: true,
      appointmentId: record.appointment_id
    });
  };

  const handleReschedule = (record: any) => {
    setRescheduleModal({
      status: true,
      appointmentId: record.appointment_id
    });
  };

  const handleConfirm = async () => {
    const appointmentId = confirmationModal.appointmentId;
    setConfirmationModal({ status: false, appointmentId: "" });
    const response = await cancelAppointment(appointmentId);
    if (response?.success) {
      dispatch(
        showToastWithTimeout({
          message: response?.data?.message,
          status: "success"
        })
      );
      fetchData();
    } else {
      dispatch(
        showToastWithTimeout({
          message: response?.error || "Something went wrong",
          status: "error"
        })
      );
    }
  };

  const handleRescheduleConfirm = async () => {
    router.push(
      `/profile/${localStorage.getItem("userId")}/quick-appointment?tabId=2&reschedule=true&appointmentId=${rescheduleModal.appointmentId}`
    );
  };

  const handleRescheduleSubmit = async (values: any) => {
    fetchData();
  };

  const handleConfirmationClose = () => {
    setConfirmationModal({ status: false, appointmentId: "" });
  };

  const handleRescheduleClose = () => {
    setRescheduleModal({ status: false, appointmentId: "" });
  };

  return (
    <Box borderRadius="md" overflow={"hidden"} width={"100%"}>
      <Flex
        ref={tableReference}
        width={"inherit"}
        maxW={"inherit"}
        minH={`calc(100vh - 170px)`}
        maxH={`calc(100vh - 170px)`}
        overflow={"auto"}
        className="scroll"
      >
        {!loading && tableData.length === 0 ? (
          <Flex width={"100%"} justifyContent={"center"} alignItems={"center"}>
            <Text as={"h5"}>No Data Found</Text>
          </Flex>
        ) : (
          <Table variant="users">
            <Thead>
              <Tr>
                {headers.properties.map((heading, index) => (
                  <React.Fragment key={index}>
                    <Th>{heading.columnName}</Th>
                  </React.Fragment>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {loading ? (
                <>
                  {Array.from({ length: 10 }, (_, index) => (
                    <Shimmer key={index} headers={headers.properties} />
                  ))}
                </>
              ) : (
                <>
                  {tableData.map((record, index) => {
                    return (
                      <React.Fragment key={index}>
                        <Tr key={record.id}>
                          {headers.properties.map((header, index_) => {
                            return (
                              <React.Fragment key={index_}>
                                {header.type === "Index" ? (
                                  <Td
                                    key={index_}
                                    onClick={() => handleRowClick(record)}
                                  >
                                    {index}
                                  </Td>
                                ) : header.type === "String" ? (
                                  <Td
                                    key={index_}
                                    onClick={() => handleRowClick(record)}
                                  >
                                    {header.tooltip ? (
                                      <Tooltip
                                        label={
                                          record[header.id]
                                            ? record[header.id]
                                            : "NA"
                                        }
                                      >
                                        {record[header.id]
                                          ? record[header.id]
                                          : "NA"}
                                      </Tooltip>
                                    ) : (
                                      <>
                                        {record[header.id]
                                          ? record[header.id]
                                          : "NA"}
                                      </>
                                    )}
                                  </Td>
                                ) : header.type === "Email" ? (
                                  <Td
                                    key={index_}
                                    onClick={() => handleRowClick(record)}
                                  >
                                    {header.tooltip ? (
                                      <Tooltip label={record[header.id]}>
                                        {record[header.id] || "NA"}
                                      </Tooltip>
                                    ) : (
                                      <>{record[header.id] || "NA"}</>
                                    )}
                                  </Td>
                                ) : header.type === "Boolean" ? (
                                  <Td
                                    key={index_}
                                    onClick={() => handleRowClick(record)}
                                  >
                                    {record[header.id] === false
                                      ? "False"
                                      : "True"}
                                  </Td>
                                ) : header.type === "Date" ? (
                                  <Td
                                    key={index_}
                                    onClick={() => handleRowClick(record)}
                                  >
                                    {record[header.id]
                                      ? moment(record[header.id]).format(
                                          "DD-MM-YYYY"
                                        )
                                      : "NA"}
                                  </Td>
                                ) : header.type === "Number" ? (
                                  <Td
                                    key={index_}
                                    onClick={() => handleRowClick(record)}
                                  >
                                    {record[header.id] || 0}
                                  </Td>
                                ) : header.type === "Download" ? (
                                  <Td
                                    key={index_}
                                    onClick={() => handleRowClick(record)}
                                  >
                                    <a
                                      href={record[header.id]}
                                      download={true}
                                      target="_blank"
                                    >
                                      <DownloadIconComponent />
                                    </a>
                                  </Td>
                                ) : header.type === "Cancel" ? (
                                  <Td
                                    key={index_}
                                    onClick={() => handleRowClick(record)}
                                  >
                                    <Button
                                      border={"1px solid"}
                                      borderColor={"brand.700"}
                                      onClick={() => handleCancel(record)}
                                    >
                                      Cancel
                                    </Button>
                                  </Td>
                                ) : header.type === "Reschedule" ? (
                                  <Td
                                    key={index_}
                                    onClick={() => handleRowClick(record)}
                                  >
                                    <Button
                                      border={"1px solid"}
                                      borderColor={"brand.700"}
                                      onClick={() => handleReschedule(record)}
                                    >
                                      Reschedule
                                    </Button>
                                  </Td>
                                ) : header.type === "DoctorSchedule" ? (
                                  <Td
                                    key={index_}
                                    onClick={() => handleRowClick(record)}
                                  >
                                    <DoctorReschedule initialData={record} initialSlots={initialSlots} onSubmit={handleRescheduleSubmit} />
                                  </Td>
                                ) : (
                                  <></>
                                )}
                              </React.Fragment>
                            );
                          })}
                        </Tr>
                      </React.Fragment>
                    );
                  })}
                </>
              )}
            </Tbody>
          </Table>
        )}
      </Flex>
      {confirmationModal.status && (
        <ConfirmationModalComponent
          onConfirm={handleConfirm}
          onClose={handleConfirmationClose}
        />
      )}
      {rescheduleModal.status && (
        <RescheduleModalComponent
          onConfirm={handleRescheduleConfirm}
          onClose={handleRescheduleClose}
        />
      )}
    </Box>
  );
};

export default TableComponent;
