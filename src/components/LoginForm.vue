<template>
<!-- template for the modal component -->
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>
              Authentication
            </h3>
          </div>
          <div class="imgAuth">
            <img src="../assets/menuImages/businessman (2).svg" 
            alt="businessman (2).svg" >
          </div>
          <div class="modal-body">
             <div class="group">
                  <input type="text" required="">
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Name</label>
                </div>
                <div class="group">
                   <input type="text" required="">
                   <span class="highlight"></span>
                   <span class="bar"></span>
                    <label>Email</label>
                 </div>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
export default {};
</script>


<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
  text-align: center;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
.imgAuth {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.imgAuth img {
  width: 50%;
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

.group {
  position: relative;
  margin-bottom: 30px;
}

input {
  font-size: 16px;
  padding: 10px;
  display: block;
  width: 90%;
  border: none;
  border-bottom: 1px solid #ccc;
}
input:focus {
  outline: none;
}

/* LABEL ======================================= */
.group > label {
  color: #999;
  font: 13px "Roboto-Light", "Lucida Grande", sans-serif;
  font-size: 18px;
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 14px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label {
  top: -15px;
  font-size: 14px;
  color: #41b883;
}

/* BOTTOM BARS ================================= */
.bar {
  position: relative;
  display: block;
  width: 320px;
}
.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 0;
  position: absolute;
  background: #41b883;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}

.modal-default-button {
  text-decoration: none;
  text-align: center;
  padding: 7px 35px;
  border: solid 1px #41b883;
  -webkit-border-radius: 23px;
  -moz-border-radius: 23px;
  border-radius: 23px;
  font: 16px "Open Sans", "Lucida Grande", sans-serif;
  /* font-weight: bold; */
  color: #41b883;
  letter-spacing: 0.2px;
  outline: none;
  background-color: white;
}

.modal-default-button:hover {
  color: white;
  /*border: none; */
  background: #41b883;
}
</style>
