import dayjs from "dayjs";
import moment from "moment";

export function getFormattedDateTime(
  date: string | Date | null,
  includeTime: boolean = false
) {
  const format = includeTime ? "YYYY-MM-DD HH:mm" : "YYYY-MM-DD";
  return dayjs(date).format(format);
}

export function formatTimeToHoursAndMinutes(time: string) {
  return moment(time, "HH:mm:ss").format("HH:mm");
}

export function calculateAge(dob: string): number {
  const birthDate = moment(dob, "DD-MM-YYYY");
  const currentDate = moment();
  const age = currentDate.diff(birthDate, "years");
  return age;
}
