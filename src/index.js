import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

class Day extends React.Component {
    render() {
      return (
        <button className="day">
          {/* TODO */}
        </button>
      );
    }
}

class MonthRow extends React.Component {
    renderSquare(i) {
        return <Day />;
    }

    render() {
      return (
        <div className="month-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
      </div>
      );
    }
} 

class Month extends React.Component {
renderWeek(i) {
    return <MonthRow />;
}

renderDayNames(month) {
    moment.weekdaysShort().map(day => {
        return (
          <div key={day} className="week-day">
           {day}
          </div>
        );
    });
}

render() {
    const currentMonth = 'January';



    return (
    <div>
        <div className="current-month">{currentMonth}</div>
        <div className="calendar">
            {this.renderDayNames(currentMonth)}
            {this.renderWeek(0)}
            {this.renderWeek(1)}
            {this.renderWeek(2)}
            {this.renderWeek(3)}
            {this.renderWeek(4)}
        </div>
    </div>
    );
}
}

class Calendar extends React.Component {
    render() {
      return (
        <div className="app">
          <div className="app-calendar">
            <Month />
          </div>
          <div className="app-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

// ========================================

ReactDOM.render(
    <Calendar />,
    document.getElementById('root')
  );
  