<template>
    <transition name="modal">
        <div class="modal-new-task">
            <div class="new-task-window">
              <div class="fon">
                <h1>New task</h1>
              </div>
                <div class="task-properties">
                    <label for="nameTask">Name</label>
                    <input type="text" placeholder="Name task"  class="name-task">
                    <div class="gantt-time-selects"> 
                      <div class="selectStart">
                        <label for="Start">Date start</label>
                        <input type="datetime-local" id="Start">
                      </div>
                      <div class="selectFinish">
                        <label for="Finish">Date end</label>
                        <input type="datetime-local" id="Finish">
                      </div>
                    </div>
                    <label for="add-predecsessorse">Predecsessorse</label>
                    <input type="text" placeholder="Add Predecsessorse" id="add-predecsessorse">
                    <div class="task-resource">
                      <label for="Resource">Resource</label>
                      <select id="Resource" >
                        <option value="Default">Select resource</option>
                        <option v-for="(resour,index) in resources" :key="index" v-bind:value="resour.text">
                          {{resour.text}}
                         </option>
                      </select>
                    </div>
                </div>
                <div class="button-block">
                  <button class="new-task-button" @click="$emit('close')">
                      Save
                  </button>
                  <button class="new-task-button" @click="$emit('close')">
                      Cancel
                  </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  data() {
    return {
      resources: [{
        text: "Sergey"
      },
      {
        text: "Dmitry"
      }]
    }
  }
};
</script>

<style selected>
.modal-new-task {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.new-task-window {
  min-width: 500px;
  margin: 0px auto;
  /* padding: 20px 30px; */
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.new-task-window > h1 {
  color: #42b982;
}

.new-task-button {
  margin: 10px 0px;
  outline: none;
  border-radius: 17px;
  width: 70px;
  height: 25px;
  border: solid 1px #42b982;
  background-color: white;
  color: #42b982;
}

.new-task-button:hover {
  background-color: #42b982;
  color: white;
}

.task-properties {
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  /* margin-top: 80px; */
  padding: 20px;
}

.gantt-time-selects {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0px;
  /* width: 100%; */
}

.name-task,
.add-predecsessorse {
  height: 20px;
  width: 100%;
}
.selectStart,
.selectFinish {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
}

.fon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px;
  /* position: fixed; */
  /* margin-top: -20px; */
  background-color: #42b982;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: white;
}

.task-resource {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.button-block{
  display: flex;
  flex-direction: row;
  width: 40%;
  justify-content: space-around;
}
</style>
