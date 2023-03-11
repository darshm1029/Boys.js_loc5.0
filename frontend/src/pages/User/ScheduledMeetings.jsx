import React from "react";
import Calendar from "../../components/Calendar";
import Sidebar from "./Sidebar";

const ScheduledMeetings = () => {
  return (
    <div className="flex">
        <Sidebar/>
    <div className="flex flex-col py-7 ml-[20%]">
      <p className="text-5xl font-bold text-darkPurple text-center">Scheduled Meetings</p>
      <Calendar />
    </div>
    </div>
  );
};

export default ScheduledMeetings;
