import parse from "date-fns/parse";
import format from "date-fns/format";
import min from 'date-fns/min';
import max from 'date-fns/max';
// import getTime from 'date-fns/get_time';

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


export const def = {};
