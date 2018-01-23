<template>
   <div class="mainWindow">
        <img src="./../assets/background.jpg" alt="No Background" class="background">
        <div class="blockOne">
        </div>
        <div class="blockTwo">
            <div class="FormAuthentication">
                <h1>Sign In</h1>
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
                 <router-link to="/home">
                   <button class="button" type="button">SUBMIT</button>
                 </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'entern',
  data() {
    return {};
  },
};
</script>

<style scoped>

.mainWindow {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.background {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  /*filter: blur(1px);*/
}

.blockOne {
  width: 50vw;
  height: 100vh;
  position: relative;
  /*    background-color: dodgerblue;*/
}
.blockTwo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100vh;
  position: relative;
}

.FormAuthentication {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  width: 400px;
  height: 300px;
  background-color: #ffffff;
  box-shadow: 0px 10px 30px 1px #000000;
}

.FormAuthentication h1 {
  margin-top: 0;
  font: 28px "Roboto-Light", "Lucida Grande", sans-serif;
  color: #41b883;
}

/* form starting stylings ------------------------------- */
.group {
  position: relative;
  margin-bottom: 30px;
}

input {
  font-size: 16px;
  padding: 10px;
  display: block;
  width: 300px;
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

/*Button*/

.button {
  text-decoration: none;
  text-align: center;
  padding: 7px 35px;
  border: solid 1px #41b883;
  -webkit-border-radius: 23px;
  -moz-border-radius: 23px;
  border-radius: 23px;
  font: 16px "Roboto-Light", "Lucida Grande", sans-serif;
  /* font-weight: bold; */
  color: #41b883;
  letter-spacing: 0.2px;
  outline: none;
  background-color: white;
}

.button:hover {
  color: white;
  /*border: none; */
  background: #41b883;
}
</style>
