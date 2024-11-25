import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CalendarView = ({ tasks }) => {
  const events = tasks.map((task, index) => ({
    id: index.toString(),
    title: task.title,
    date: task.deadline,
  }));

  return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />;
};

export default CalendarView;
