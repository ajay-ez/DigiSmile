import RemoveIconComponent from "@/app/Icons/ProfileIcon";
import AppointmentHistoryIconComponent from "@/app/Icons/AppointmentHistoryIcon";
import UpcomingAppointmentIconComponent from "@/app/Icons/UpcomingAppointmentIcon";
import ChangePasswordIconComponent from "@/app/Icons/ChangePasswordIcon";
import MedicalRecordIconComponent from "@/app/Icons/MedicalRecordIcon";
import SignInIconComponent from "@/app/Icons/SignInIcon";
import AboutUSIconComponent from "@/app/Icons/AboutUsIcon";
import ServiceIconComponent from "@/app/Icons/ServicesIcon";
import AppointmentIconComponent from "@/app/Icons/AppointmentIcon";
import HomeIconComponent from "@/app/Icons/HomeIcon";
import DocumentIconComponent from "@/app/Icons/DocumentIcon";
import QuickAppointmentIconComponent from "@/app/Icons/QuickAppointmentIcon";

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
    name: "User Profile",
    url: "profile",
    component: RemoveIconComponent,
    permission: "patient"
  },
  {
    id: "1",
    name: "Documents",
    url: "documents",
    component: DocumentIconComponent,
    permission: "patient"
  },
  {
    id: "2",
    name: "Quick Appointment",
    url: "quick-appointment",
    component: QuickAppointmentIconComponent,
    permission: "patient"
  },
  {
    id: "3",
    name: "Upcoming Appointments",
    url: "upcoming-appointments",
    component: UpcomingAppointmentIconComponent,
    permission: "patient"
  },
  {
    id: "4",
    name: "Appointment History",
    url: "appointment-history",
    component: AppointmentHistoryIconComponent,
    permission: "patient"
  },
  {
    id: "5",
    name: "Change Password",
    url: "change-password",
    component: ChangePasswordIconComponent,
    permission: "patient"
  },
  {
    id: "6",
    name: "Add Medical Records",
    url: "add-medical-records",
    component: MedicalRecordIconComponent,
    permission: "staff"
  },
  {
    id: "7",
    name: "Check Appointment",
    url: "check-appointment",
    component: MedicalRecordIconComponent,
    permission: "doctor"
  }
];

export const appointmentLists = [
  {
    id: "0",
    name: "Home",
    url: "/home",
    component: HomeIconComponent
  },
  {
    id: "1",
    name: "About us",
    url: "/home/about-us",
    component: AboutUSIconComponent
  },
  {
    id: "2",
    name: "Services",
    url: "/home/clinic-services",
    component: ServiceIconComponent
  },
  {
    id: "3",
    name: "Sign Up",
    url: "/auth/signup",
    component: SignInIconComponent
  },
  {
    id: "4",
    name: "Sign In",
    url: "/auth/login",
    component: RemoveIconComponent
  },
  {
    id: "5",
    name: "Appointment",
    url: "/appointment",
    component: AppointmentIconComponent
  }
];
