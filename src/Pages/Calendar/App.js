import "./App.css";
import * as React from "react";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  MonthAgenda,
  ViewDirective,
  ViewsDirective,
} from "@syncfusion/ej2-react-schedule";
class App extends React.Component {
  constructor() {
    super(...arguments);
    this.data = [
      {
        Id: 1,
        Subject: "CSE-354",
        StartTime: new Date(2023, 0, 8, 8, 10),
        EndTime: new Date(2023, 0, 8, 10, 40),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 1,
        Subject: "BREAK",
        StartTime: new Date(2023, 0, 8, 10, 40),
        EndTime: new Date(2023, 0, 8, 11, 0),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 1,
        Subject: "LUNCH",
        StartTime: new Date(2023, 0, 8, 12, 40),
        EndTime: new Date(2023, 0, 8, 13, 30),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 1,
        Subject: "CSE-300/CSE-338",
        StartTime: new Date(2023, 0, 8, 13, 30),
        EndTime: new Date(2023, 0, 8, 16, 0),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 2,
        Subject: "CT",
        StartTime: new Date(2023, 0, 9, 8, 10),
        EndTime: new Date(2023, 0, 9, 9, 0),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 2,
        Subject: "CSE-337",
        StartTime: new Date(2023, 0, 9, 9, 0),
        EndTime: new Date(2023, 0, 9, 9, 50),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 2,
        Subject: "CSE-321",
        StartTime: new Date(2023, 0, 9, 9, 50),
        EndTime: new Date(2023, 0, 9, 10, 40),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 2,
        Subject: "BREAK",
        StartTime: new Date(2023, 0, 9, 10, 40),
        EndTime: new Date(2023, 0, 9, 11, 0),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 2,
        Subject: "CSE-345",
        StartTime: new Date(2023, 0, 9, 11, 0),
        EndTime: new Date(2023, 0, 9, 11, 50),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 2,
        Subject: "CSE-353",
        StartTime: new Date(2023, 0, 9, 11, 50),
        EndTime: new Date(2023, 0, 9, 12, 40),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 2,
        Subject: "LUNCH",
        StartTime: new Date(2023, 0, 9, 12, 40),
        EndTime: new Date(2023, 0, 9, 13, 30),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 2,
        Subject: "CSE-353",
        StartTime: new Date(2023, 0, 9, 13, 30),
        EndTime: new Date(2023, 0, 9, 14, 20),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 3,
        Subject: "CT",
        StartTime: new Date(2023, 0, 10, 8, 10),
        EndTime: new Date(2023, 0, 10, 9, 0),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 3,
        Subject: "CSE-321",
        StartTime: new Date(2023, 0, 10, 9, 0),
        EndTime: new Date(2023, 0, 10, 9, 50),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 3,
        Subject: "CSE-311",
        StartTime: new Date(2023, 0, 10, 9, 50),
        EndTime: new Date(2023, 0, 10, 10, 40),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 3,
        Subject: "BREAK",
        StartTime: new Date(2023, 0, 10, 10, 40),
        EndTime: new Date(2023, 0, 10, 11, 0),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 3,
        Subject: "CSE-345",
        StartTime: new Date(2023, 0, 10, 11, 0),
        EndTime: new Date(2023, 0, 10, 11, 50),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 3,
        Subject: "CSE-337",
        StartTime: new Date(2023, 0, 10, 11, 50),
        EndTime: new Date(2023, 0, 10, 12, 40),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 3,
        Subject: "LUNCH",
        StartTime: new Date(2023, 0, 10, 12, 40),
        EndTime: new Date(2023, 0, 10, 13, 30),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 3,
        Subject: "CSE-346(A1)",
        StartTime: new Date(2023, 0, 10, 13, 30),
        EndTime: new Date(2023, 0, 10, 16, 0),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 4,
        Subject: "CT",
        StartTime: new Date(2023, 0, 11, 8, 10),
        EndTime: new Date(2023, 0, 11, 9, 0),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 4,
        Subject: "CSE-321",
        StartTime: new Date(2023, 0, 11, 9, 0),
        EndTime: new Date(2023, 0, 11, 9, 50),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 4,
        Subject: "CSE-353",
        StartTime: new Date(2023, 0, 11, 9, 50),
        EndTime: new Date(2023, 0, 11, 10, 40),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 4,
        Subject: "BREAK",
        StartTime: new Date(2023, 0, 11, 10, 40),
        EndTime: new Date(2023, 0, 11, 11, 0),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 4,
        Subject: "CSE-311",
        StartTime: new Date(2023, 0, 11, 11, 0),
        EndTime: new Date(2023, 0, 11, 11, 50),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 4,
        Subject: "CSE-345",
        StartTime: new Date(2023, 0, 11, 11, 50),
        EndTime: new Date(2023, 0, 11, 12, 40),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 4,
        Subject: "LUNCH",
        StartTime: new Date(2023, 0, 11, 12, 40),
        EndTime: new Date(2023, 0, 11, 13, 30),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 4,
        Subject: "CSE-346(A2)",
        StartTime: new Date(2023, 0, 11, 13, 30),
        EndTime: new Date(2023, 0, 11, 16, 0),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 5,
        Subject: "BREAK",
        StartTime: new Date(2023, 0, 12, 10, 40),
        EndTime: new Date(2023, 0, 12, 11, 0),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 5,
        Subject: "CSE-337",
        StartTime: new Date(2023, 0, 12, 11, 0),
        EndTime: new Date(2023, 0, 12, 11, 50),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 5,
        Subject: "CSE-311",
        StartTime: new Date(2023, 0, 12, 11, 50),
        EndTime: new Date(2023, 0, 12, 12, 40),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 5,
        Subject: "LUNCH",
        StartTime: new Date(2023, 0, 12, 12, 40),
        EndTime: new Date(2023, 0, 12, 13, 30),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 5,
        Subject: "CSE-312",
        StartTime: new Date(2023, 0, 12, 13, 30),
        EndTime: new Date(2023, 0, 12, 16, 0),
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
      },
      {
        Id: 6,
        Subject: "OFFDAY",
        StartTime: new Date(2023, 0, 13),
        EndTime: new Date(2023, 0, 13),
        IsAllDay: true,
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
        IsBlock: true,
      },
      {
        Id: 7,
        Subject: "OFFDAY",
        StartTime: new Date(2023, 0, 14),
        EndTime: new Date(2023, 0, 14),
        IsAllDay: true,
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=13",
        IsReadonly: true,
        IsBlock: true,
      },
    ];
    this.workingDays = [0, 1, 2, 3, 4];
  }
  eventTemplate(props) {
    return (
      <div className="template-wrap">
        <div>{props.Subject}</div>
        <div>
          {props.StartTime.getHours() +
            ":" +
            props.StartTime.getMinutes() +
            " - " +
            props.EndTime.getHours() +
            ":" +
            props.EndTime.getMinutes()}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="item-5">
        <ScheduleComponent
          height="725px"
          eventSettings={{
            dataSource: this.data,
            template: this.eventTemplate.bind(this),
          }}
          workDays={this.workingDays}
          showWeekNumber={true}
          startHour="08:10"
          endHour="17:00"
        >
          <ViewsDirective>
            <ViewDirective option="Day"></ViewDirective>
            <ViewDirective option="Week"></ViewDirective>
            <ViewDirective option="WorkWeek" isSelected={true}></ViewDirective>
            <ViewDirective option="Month"></ViewDirective>
            <ViewDirective option="Agenda"></ViewDirective>
            <ViewDirective option="MonthAgenda"></ViewDirective>
          </ViewsDirective>
          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, MonthAgenda]}
          />
        </ScheduleComponent>
      </div>
    );
  }
}
export default App;
