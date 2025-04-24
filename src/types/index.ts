export interface LoginFormValues {
  email: string;
  password: string;
}

export interface UserProfileValues {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  // date_of_birth: string;
}

export interface ChangePasswordValues {
  new_password: string;
  old_password: string;
}

export interface ForgotPasswordValues {
  email: string;
}

export interface MedicalRecordsValues {
  date: string;
  document: string;
  email: string;
  prescription: string;
  problem: string;
}

export interface SignupFormValues extends LoginFormValues {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  address: string;
  phone_number: string;
  confirmPassword?: string;
  problem: string;
}

export interface appointmentValues {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  address: string;
  phone_number: string;
  confirmPassword?: string;
  problem: string;
  city: string;
}
