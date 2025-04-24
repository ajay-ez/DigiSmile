"use server";

import moment from "moment";

export const fetchAvailableAppointments = async (payload: any) => {
  const { appointment_date, city, showBooked= false } = payload;
  try {
    const apiResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/get_appointments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ appointment_date, city })
      }
    );
    const jsonResponse = await apiResponse.json();
    if (apiResponse.status !== 200) throw jsonResponse;
    if(showBooked && jsonResponse?.slotss){
      jsonResponse.slotss = jsonResponse.slotss.filter((slot: any) => slot.status !== "booked");
    }

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

const formatTime = (time: string) => moment(time, "HH:mm:ss").format("h A");

export const fetchAppointmentHistory = async (userId: any) => {
  try {
    const apiResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/get_user_appointments/${userId}`,
      { method: "GET" }
    );
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 200) throw jsonResponse;

    jsonResponse.previous_appointments.map((item: any) => {
      item.name = "Dr Mahmood";
      item.start_end_time = `${formatTime(item.start_time)} - ${formatTime(item.end_time)}`;
      return item;
    });

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const fetchAppointmentList = async (appointment_date: string) => {
  try {
    const apiResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/get_patient_appointments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ appointment_date })
      }
    );
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 200) throw jsonResponse;

    jsonResponse.appointments.map((item: any) => {
      item.start_end_time = `${formatTime(item.start_time)} - ${formatTime(item.end_time)}`;
      return item;
    });

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const fetchUpcomingAppointment = async (userId: any) => {
  try {
    const apiResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/get_user_appointments/${userId}`,
      { method: "GET" }
    );
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 200) throw jsonResponse;

    jsonResponse.upcoming_appointments.map((item: any) => {
      item.name = "Dr Mahmood";
      item.start_end_time = `${formatTime(item.start_time)} - ${formatTime(item.end_time)}`;
      return item;
    });
    
    return { success: true, data: jsonResponse };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const cancelAppointment = async (appointment_id: any) => {
  try {
    const apiResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/cancel_appointment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ appointment_id })
      }
    );
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 200) throw jsonResponse;

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const BookQuickAppointmentAction = async (
  payload: any,
  authToken: any
) => {
  try {
    const apiResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/book_appointment_existing_user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${authToken}`
        },
        body: JSON.stringify(payload)
      }
    );
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 201) throw jsonResponse;

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const BookAppointmentAction = async (payload: any) => {
  try {
    const apiResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/new_user_appointment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 201) throw jsonResponse;

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const RescheduleAppointmentAction = async (payload: any) => {
  try {
    const apiResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/reschedule_appointment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 201) throw jsonResponse;

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const AddMedicalRecordsAction = async (payload: any, authToken: any) => {
  try {
    const apiResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/add_medical_record`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${authToken}`
        },
        body: JSON.stringify(payload)
      }
    );
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 201) throw jsonResponse;

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};
