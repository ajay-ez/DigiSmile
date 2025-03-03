import { Divider } from "@chakra-ui/react";
import React from "react";
interface Props {
  renderToHome: boolean;
  showTitle?: boolean;
}
export const ClinicSchedule = ({ renderToHome, showTitle = true }: Props) => {
  return (
    <div
      className={`${renderToHome ? "bg font-poppins-white " : ""} flex flex-col items-center`}
    >
      {showTitle && (
        <h1
          
          className="text-centr font font-poppins-poppins  mb-8"
        >
          Schedule
        </h1>
      )}
      <div
        className={` p-8 shadow font-poppins-schedule-shadow rounded-lg ${renderToHome ? " bg-gray-200 w-[100%]" : "bg-white w-[70%]"}`}
      >
        <div
          className={`${renderToHome ? "flex font-poppins justify-between md:justify-center md:gap-[10%] flex-col md:flex-row" : ""}`}
        >
          <div>
            <h1
              
              className="my-8 font font-poppins-poppins"
            >
              DC Office
            </h1>
            <div className="flex gap-3 font-poppins justify-between">
              <h1 className="text-blue-700   font-poppins">
                Monday
              </h1>
              <h1 className="text-blue-700 font-poppins">
                10:00 am - 5:00 pm
              </h1>
            </div>
            <div className="flex gap-3 font-poppins justify-between">
              <h1 className="text-blue-700 font-poppins">
                Wednesday
              </h1>
              <h1 className="text-blue-700 font-poppins">
                10:00 am - 5:00 pm
              </h1>
            </div>
            <div className="flex gap-3 font-poppins justify-between">
              <h1 className="text-blue-700 font-poppins">
                Friday
              </h1>
              <h1 className="text-blue-700 font-poppins">
                {" "}
                10:00 am - 5:00 pm
              </h1>
            </div>
          </div>

          {renderToHome && (
            <Divider
              orientation="vertical"
              className="mx-4 w font-poppins-[3px] bg-black mt-8"
            />
          )}

          <div>
            <h1  className="my-8">
              {" "}
              Burke Office
            </h1>
            <div className="flex gap-3 font-poppins justify-between">
              <h1>Tuesday</h1>
              <h1>09:00 am - 4:00 pm</h1>
            </div>
            <div className="flex gap-3 font-poppins justify-between">
              <h1>Thursday</h1>
              <h1>09:00 am - 4:00 pm</h1>
            </div>
            <div className="flex gap-3 font-poppins justify-between">
              <h1>Saturday</h1>
              <h1>09:00 am - 4:00 pm</h1>
            </div>
          </div>
        </div>
        <h1 className="text-center my font-poppins-4 font-bold text-lg mt-8">
          Enjoy Your Sunday—We’ll Be Ready to Welcome You Back on Monday 😉
        </h1>
      </div>
    </div>
  );
};
