interface ActionData {
  id: string;
  name: string;
  checkPermission?: boolean;
  checkColumn?: string;
}

interface MenuData {
  id: string;
  name: string;
}

interface HeaderProperties {
  id: string;
  columnName: string;
  actionValue?: string;
  type:
    | "Index"
    | "String"
    | "Email"
    | "Date"
    | "Number"
    | "Boolean"
    | "Action"
    | "Status"
    | "Delete"
    | "Cancel"
    | "Reschedule"
    | "Menu"
    | "DoctorSchedule"
    | "Download";
  isEnum?: boolean;
  shouldSort?: boolean;
  tooltip?: boolean;
  actionData?: ActionData[];
  menuData?: MenuData[];
}

interface HeaderFilterItems {
  id: string;
  name: string;
  color?: string;
  bgColor?: string;
}
interface HeaderFilters {
  id: string;
  columnName: string;
  columnType: string;
  columnItem?: HeaderFilterItems[];
}

export interface Header {
  name: string;
  hasDelete?: boolean;
  hasSelect?: boolean;
  filters?: HeaderFilters[];
  properties: HeaderProperties[];
}
