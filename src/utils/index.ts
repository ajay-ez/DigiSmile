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
    heading: "Dental Checkup and Exam",
    time: "60-100 minutes",
    price: "starts at $349",
    value: "complete_exam",
    description:
      "We thoroughly evaluate your overall dental health, which would include your jaw and bones, as well as your teeth and gums during your regularly scheduled examination."
  },
  {
    heading: "Cosmetic Dentistry",
    time: "60-100 minutes",
    price: "starts at $349",
    value: "teeth_whitening",
    description:
      "A beautiful smile is one of the most sought after cosmetic features in the world. People from all backgrounds and professions want a straight smile, and we are here to help turn that desire into reality."
  },
  {
    heading: "Teeth Whitening",
    time: "60-100 minutes",
    price: "starts at $349",
    value: "regular_cleaning",
    description:
      "Your smile is the gate through which people will pass in order to get to know you better, and therefore, you should always present a radiant, self-confident and whiter smile to the public."
  },
  {
    heading: "Tooth colored filling",
    time: "60-100 minutes",
    price: "starts at $349",
    value: "tooth_repair",
    description:
      "Tooth fillings are great solutions to dental decay or cavities,  You will not need to worry about discomfort and pain, because we will completely numb the area to be filled. You won’t feel a thing."
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
    url: "/",
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
