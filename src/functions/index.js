import parse from 'date-fns/parse';
import min from 'date-fns/min';
import max from 'date-fns/max';
// import getTime from 'date-fns/get_time';
// import endOfSecond from 'date-fns/end_of_second';
// import endOfMinute from 'date-fns/end_of_minute';
// import endOfHour from 'date-fns/end_of_hour';
// import endOfDay from 'date-fns/end_of_day';
// import endOfMonth from 'date-fns/end_of_month';
// import endOfYear from 'date-fns/end_of_year';
// import startOfSecond from 'date-fns/start_of_second';
// import startOfMinute from 'date-fns/start_of_minute';
// import startOfHour from 'date-fns/start_of_hour';
// import startOfDay from 'date-fns/start_of_day';
// import startOfMonth from 'date-fns/start_of_month';
// import startOfQuarter from 'date-fns/start_of_quarter';
// import startOfYear from 'date-fns/start_of_year';
// import differenceInMilliseconds from 'date-fns/difference_in_milliseconds';
import getYear from 'date-fns/get_year';
// import getMonth from 'date-fns/get_month';
// import getDate from 'date-fns/get_date';
// import getDayOfYear from 'date-fns/get_day_of_year';
// import getHours from 'date-fns/get_hours';
// import getMinutes from 'date-fns/get_minutes';
// import getSeconds from 'date-fns/get_seconds';
import getDaysInMonth from 'date-fns/get_days_in_month';
// import getDaysInYear from 'date-fns/get_days_in_year';
// import isSameYear from 'date-fns/is_same_year';
// import isSameQuarter from 'date-fns/is_same_quarter';
// import isSameMonth from 'date-fns/is_same_month';
// import isSameDay from 'date-fns/is_same_day';
// import isSameHour from 'date-fns/is_same_hour';
// import isSameMinute from 'date-fns/is_same_minute';
// import addYears from 'date-fns/add_years';
// import addQuarters from 'date-fns/add_quarters';
// import addMonths from 'date-fns/add_months';
// import addDays from 'date-fns/add_days';
// import addHours from 'date-fns/add_hours';
// import addMinutes from 'date-fns/add_minutes';
// import addSeconds from 'date-fns/add_seconds';
// import differenceInDays from 'date-fns/difference_in_days';
// import isAfter from 'date-fns/is_after';
// import isBefore from 'date-fns/is_before';
import format from 'date-fns/format';
import { isBefore, startOfYear, addYears, startOfQuarter, addQuarters, startOfMonth, addMonths, startOfDay, getDaysInYear, addDays } from 'date-fns';
// import { startOfYear } from 'date-fns';
// import compareAsc from 'date-fns/compare_asc';
import capitalize from 'lodash/capitalize';

export const TransformInputData = rows => rows.reduce((acc, row) => {
  const dates = { startDate: parse(row.start), endDate: parse(row.finish) };
  const task = {
  id: row.id,
  contain: row.contain,
  name: row.name,
  duration: row.duration,
  dateStart: format(dates.startDate, 'DD-MM-YYYY HH:mm:ss'),
  dateFinish: format(dates.endDate, 'DD-MM-YYYY HH:mm:ss'),
  predecsessorse: row.predecsessorse,
  resource: row.resource
  // start: getTime(dates.startDate),
  };
  return {
    startChartDate: acc.startChartDate ? min(acc.startChartDate, dates.startDate) : dates.startDate,
    endChartDate: acc.endChartDate ? max(acc.endChartDate, dates.endDate) : dates.endDate,
    tasks: [...acc.tasks, task],
  };
}, { tasks: [] });

    // return { name: row.name,
    // dateStart: format(parse(row.start), "DD-MM-YYYY HH:mm:ss"),
    // dateFinish: format(parse(row.finish), "DD-MM-YYYY HH:mm:ss"),
    // duration: row.duration,
    // contain: row.contain,
    // id: row.id,
    // number: row.number,
    // predecsessorse: row.predecsessorse,
    // resource: row.resource


export const GetStartYearChart = startChartDate => (getYear(startChartDate));

export const GetEndYearChart = endChartDate => (getYear(endChartDate));

export const GetCountDaysInMonth = date => (getDaysInMonth(date));

const switchScale = (scale) => {
  switch (scale) {
    case 'months':
      return [
        {
          start: startOfYear,
          addType: addYears,
          add: 1,
          method: date => capitalize(format(date, 'YYYY')),
          get: () => 12
        },
        {
          start: startOfQuarter,
          addType: addQuarters,
          add: 1,
          method: date => capitalize(format(date, 'Q')),
          get: () => 3
        },
        {
          start: startOfMonth,
          addType: addMonths,
          add: 1,
          method: date => capitalize(format(date, 'M')),
          get: () => 1
        },
      ];
      case 'days':
      return [
        {
          start: startOfYear,
          addType: addYears,
          add: 1,
          method: date => capitalize(format(date, 'YYYY')),
          get: date => getDaysInYear(date)
        },
        {
          start: startOfMonth,
          addType: addMonths,
          add: 1,
          method: date => capitalize(format(date, 'MMM')),
          get: date => getDaysInMonth(date)
        },
        {
          start: startOfDay,
          addType: addDays,
          add: 1,
          method: date => capitalize(format(date, 'D')),
          get: () => 1
        },
       
      ];
    default:
      return new Error('Invalid format');
  }
};

export const CalcHeaderDays = (startDate, endDate, scale, cellWidth) => 
switchScale(scale).map((sc) => {
    const header = [];
    console.log(new Date(getYear(endDate), 12)); 
    for (let date = new Date(getYear(startDate), 0); isBefore(date, new Date(getYear(endDate), 12));
    date = sc.start(sc.addType(date, sc.add))) {
      header.push({
        label: sc.method(date),
        width: cellWidth * sc.get(date)
      });
    }    
  return header;
});

