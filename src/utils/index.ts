import RemoveIconComponent from "@/app/Icons/ProfileIcon";
import AppointmentHistoryIconComponent from "@/app/Icons/AppointmentHistoryIcon";
import UpcomingAppointmentIconComponent from "@/app/Icons/UpcomingAppointmentIcon";
import ChangePasswordIconComponent from "@/app/Icons/ChangePasswordIcon";
import MedicalRecordIconComponent from "@/app/Icons/MedicalRecordIcon";

export const clinicServices = [
  {
    heading: "Complete Exam",
    time: "60-100 minutes",
    price: "starts at $349",
    value: "complete_exam",
    description:
      "Combines both cleaning & whitening services for longer-lasting results. Plus free fluoride polish for added strength, protection, and the sparkliest smile."
  },
  {
    heading: "Teeth Whitening",
    time: "60-100 minutes",
    price: "starts at $349",
    value: "teeth_whitening",
    description:
      "Combines both cleaning & whitening services for longer-lasting results. Plus free fluoride polish for added strength, protection, and the sparkliest smile."
  },
  {
    heading: "Regular Cleaning",
    time: "60-100 minutes",
    price: "starts at $349",
    value: "regular_cleaning",
    description:
      "Combines both cleaning & whitening services for longer-lasting results. Plus free fluoride polish for added strength, protection, and the sparkliest smile."
  },
  {
    heading: "Tooth Repair",
    time: "60-100 minutes",
    price: "starts at $349",
    value: "tooth_repair",
    description:
      "Combines both cleaning & whitening services for longer-lasting results. Plus free fluoride polish for added strength, protection, and the sparkliest smile."
  }
];

export const sidebarData: {
  id: string;
  name: string;
  url: string;
  component: any;
  permission: string;
}[] = [
  {
    id: "0",
    name: "Documents",
    url: "documents",
    component: RemoveIconComponent,
    permission: "patient"
  },
  {
    id: "1",
    name: "Quick Appointment",
    url: "quick-appointment",
    component: RemoveIconComponent,
    permission: "patient"
  },
  {
    id: "2",
    name: "Upcoming Appointments",
    url: "upcoming-appointments",
    component: UpcomingAppointmentIconComponent,
    permission: "patient"
  },
  {
    id: "3",
    name: "Appointment History",
    url: "appointment-history",
    component: AppointmentHistoryIconComponent,
    permission: "patient"
  },
  {
    id: "4",
    name: "Change Password",
    url: "change-password",
    component: ChangePasswordIconComponent,
    permission: "patient"
  },
  {
    id: "5",
    name: "Add Medical Records",
    url: "add-medical-records",
    component: MedicalRecordIconComponent,
    permission: "staff"
  },
  {
    id: "6",
    name: "Check Appointment",
    url: "check-appointment",
    component: MedicalRecordIconComponent,
    permission: "doctor"
  }
];
