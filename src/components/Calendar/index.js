import React from "react";
import moment from 'moment';
import './calendar.css';

export default class Calendar extends React.Component {

  weekdayShort = moment.weekdaysShort();

  state = {
    dateObject: moment()
  }

  firstDayOfMonth = () => {
    let firstDay = moment(this.state.dateObject).startOf("month").format("d");
    return firstDay;
  }

  daysInMonth = () => {
    return this.state.dateObject.daysInMonth();
  }

  currentDay = () => {
    return this.state.dateObject.format("D");
  }

  render() {

    let daysOfWeek = this.weekdayShort.map(day => {
      return (
        <th key={day} className="week-day">
          {day}
        </th>
      );
    });

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td className="calendar-day empty">{""}</td>
      );
    }

    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let currentDay = d == this.currentDay() ? "today" : "";
      daysInMonth.push(
        <td key={d} className={`calendar-day ${currentDay}`}>
          {d}
        </td>
      );
    }

    let totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];
    totalSlots.forEach((item, i) => {
      if (i % 7 !== 0) {
        cells.push(item);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(item);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    let formattedDays = rows.map((day, i) => {
      return <tr>{day}</tr>;
    });

    return (
      <div>
        <h2>Calendar</h2>
        <table className="calendar-day">
            <thead>
              <tr>{daysOfWeek}</tr>
            </thead>
            <tbody>{formattedDays}</tbody>
          </table>
      </div>
    );
  }
}