
const settingWeek = () => {
  const weekDates = []
  for (let i = 1; i < 8; i++){
    const mondayDate = new Date().getDate() - new Date().getDay() + i;
    const fullMondayDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      mondayDate
      );
      weekDates.push(+fullMondayDate)
    }
  return weekDates
}


const defaultWeekData = [
  {
    id: 1,
    dateStamp: settingWeek()[0],
    startTime: "Start time",
    endTime: "End time",
    taskTitle: "Task",
    taskDesc: "Task description.",
  },
  {
    id: 2,
    dateStamp: settingWeek()[1],
    startTime: "Start time",
    endTime: "End time",
    taskTitle: "Task",
    taskDesc: "Task description.",
  },
  {
    id: 3,
    dateStamp: settingWeek()[2],
    startTime: "Start time",
    endTime: "End time",
    taskTitle: "Task",
    taskDesc: "Task description.",
  },
  {
    id: 4,
    dateStamp: settingWeek()[3],
    startTime: "Start time",
    endTime: "End time",
    taskTitle: "Task",
    taskDesc: "Task description.",
  },
  {
    id: 5,
    dateStamp: settingWeek()[4],
    startTime: "Start time",
    endTime: "End time",
    taskTitle: "Task",
    taskDesc: "Task description.",
  },
  {
    id: 6,
    dateStamp: settingWeek()[5],
    startTime: "Start time",
    endTime: "End time",
    taskTitle: "Task",
    taskDesc: "Task description.",
  },
  {
    id: 7,
    dateStamp: settingWeek()[6],
    startTime: "Start time",
    endTime: "End time",
    taskTitle: "Task",
    taskDesc: "Task description.",
  },
];

export default defaultWeekData