<template>
 <div class="gantt-vue">
    <gantt-tab></gantt-tab>
    <div class="gantt_container">
    <gantt-table :rows="Tasks"></gantt-table>
      <div class="gantt-diagramm">
        <gantt-header-chart :header="CalcHeaderDate"></gantt-header-chart>
        <div class="gantt-diagramm-body">
          <!-- <h1>task data</h1> -->
        </div>
      </div>
    </div>
</div>

</template>


<script>
import { TransformInputData,
  CalcHeaderDays
 } from "./../functions" 
import GanttTab from "./GanttTab";
import GanttTable from "./GanttTable";
import GanttHeaderChart from "./GanttHeaderChart";
import dataJsonRows from "./../data.json";

const defaultOptions = {
  cellWidth: 24,
  scales: [
    { scale: 'months' },
    { scale: 'days' },
  ]
}


export default {
  components: {
    "gantt-tab": GanttTab,
    "gantt-table": GanttTable,
    "gantt-header-chart": GanttHeaderChart,
  },

  data() {
    return {
      dataJsonRows,
    };
  },

  computed: {
    ArrayRows() {
      const { rows } = this.dataJsonRows;
      // console.log(TransformInputData(rows))
      return TransformInputData(rows);
    },
    Tasks() {
      return this.ArrayRows.tasks
    },
    StartChartDate() {
      return this.ArrayRows.startChartDate
    },
    EndChartDate() {
      return this.ArrayRows.endChartDate
    },

    CalcHeaderDate() { 
      return CalcHeaderDays(this.StartChartDate, this.EndChartDate, 'months', defaultOptions.cellWidth)
    }
  },
  method: { }
};
</script>

<style>
.gantt_container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  border-top: solid 1px #80808030;
  /* overflow-x: scroll; */
}

.gantt-thead > .row > .cell > h3 {
  font-family: Arial;
  font-size: 12px;
  color: #41b882;
}
.cell {
  display: table-cell;
  text-align: center;
  border-right: solid 1px #80808030;
  border-bottom: solid 1px #80808030;
}
.gantt-grid-header {
  display: flex;
  flex-direction: row;
  /* justify-content: flex-start; */
  align-items: center;
  height: 60px;
  /* width: 780px; */
  border-bottom: solid 1px #b9b4b4;
}

.grid-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border-right: solid 1px grey;
  margin: 0;
  padding-left: 4px;
  padding-right: 4px;
}

.number,
.duration {
  flex-shrink: 4;
}

.gantt-diagramm {
  overflow-x: scroll;
}
</style>
