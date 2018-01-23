<template>
  <div class="menu" v-bind:style="{'min-width': countWidth, transition: transitDalay}" >
      <div class="container" >
        <button class="btn cmn-toggle-switch cmn-toggle-switch__htx" 
          v-on:click="hamburger" v-bind:class="{ active: isActive }">
          <span>Hamburger</span>
        </button>
        <br>
        <ul>
          <router-link to="/home">
            <li class="imgGant">
              <img src="../assets/menuImages/documents.svg" alt="No Img">
              <span v-show="isActive"> Project </span>
             </li>
          </router-link>
            <li class="imgResourse">
              <img src="../assets/menuImages/worker.svg" alt="No Img">
              <span v-show="isActive"> Resourse </span>
            </li>
            <li class="imgPert">
              <img src="../assets/menuImages/diagram.svg" alt="No Img">
              <span v-show="isActive"> PERT</span>
            </li>
            <li class="imgReports">
              <img src="../assets/menuImages/analytics.svg" alt="No Img">
              <span v-show="isActive"> Reports </span>
            </li>
            <li class="imgSettings">
              <img src="../assets/menuImages/configuration.svg" alt="No Img">
              <span v-show="isActive"> Settings </span>
            </li>
            <li class="imgHelp">
              <img src="../assets/menuImages/question.svg" alt="No Img">
              <span v-show="isActive"> Help </span>
            </li>
            <router-link to="/about">
            <li class="imgAbout">
              <img src="../assets/menuImages/info.svg" alt="No Img">
              <span v-show="isActive"> About </span>
            </li>
            </router-link>
        </ul>
      </div>
        <div class="user">
          <button id="show-modal" @click="showModal = true">
            <img src="../assets/menuImages/man.png" alt="No avatar" class="avatar">
            <transition name="fade">
            <span v-show="isActive" class="person">
              Name Person
            </span>
            </transition>
          </button>
          <LoginForm v-if="showModal" @close="showModal = false">
              <!--
                you can use custom content here to overwrite
                default content
              -->
              <h3 slot="header">Authentication</h3>
          </LoginForm>
        </div>
  </div>
</template>

<script>
import LoginForm from "./LoginForm";

export default {
  data() {
    return {
      isActive: false,
      countWidth: {},
      transitDalay: {},
      showModal: false
    };
  },
  components: { LoginForm },
  methods: {
    hamburger() {
      if (this.isActive) {
        this.isActive = false;
        this.countWidth = "60px";
      } else {
        this.transitDalay = "0.3s";
        this.isActive = true;
        this.countWidth = "200px";
      }
    }
  }
};
</script>

<style selected>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

body {
  margin: 0;
  padding: 0;
}
.menu {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  min-width: 60px;
  background-color: #41b883;
  transition-property: width;
}

.line {
  width: 98%;
}

a {
  text-decoration: none;
}

.container {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
}

span {
  font-family: "Open Sans";
}
.container > ul {
  margin: 0;
  padding: 0;
  width: 100%;
  list-style-type: none;
}
.container > ul li {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 1px;
  padding: 3px 0;
  padding-left: 7px;
  cursor: default;
  color: white;
}

.container > ul span {
  margin-left: 20px;
  padding-bottom: 10px;
  width: 100%;
  height: 100%;
}

.container li img {
  width: 45px;
}

.container > ul li:hover {
  background-color: #35495e;
  color: white;
}

/* /// button hamburger */

/* ///common style for hamburger button */
.cmn-toggle-switch {
  display: block;
  position: relative;
  overflow: hidden;
  margin: 0;
  margin-top: 10px;
  margin-left: 15px;
  padding: 0;
  width: 25px;
  height: 30px;
  font-size: 0;
  text-indent: -9999px;
  appearance: none;
  box-shadow: none;
  border-radius: none;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}

.cmn-toggle-switch:focus {
  outline: none;
}

/* //// Work with span element in button hamburger */

.cmn-toggle-switch span {
  display: block;
  position: absolute;
  top: 15px;
  left: 0px;
  right: 0px;
  height: 2px;
  background: white;
}

.cmn-toggle-switch span::before,
.cmn-toggle-switch span::after {
  position: absolute;
  display: block;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #fff;
  content: "";
}

.cmn-toggle-switch span::before {
  top: -7px;
}

.cmn-toggle-switch span::after {
  bottom: -7px;
}

/* /// */
.cmn-toggle-switch__htx {
  background-color: #41b883;
}

.cmn-toggle-switch__htx span {
  transition: background 0 0.3s;
}

.cmn-toggle-switch__htx span::before,
.cmn-toggle-switch__htx span::after {
  transition-duration: 0.3s, 0.3s;
  transition-delay: 0.3s, 0;
}

.cmn-toggle-switch__htx span::before {
  transition-property: top, transform;
}

.cmn-toggle-switch__htx span::after {
  transition-property: bottom, transform;
}

/* активное состояние, т.е. меню открыто */
.cmn-toggle-switch__htx.active {
  background-color: #41b883;
}

.cmn-toggle-switch__htx.active span {
  background: none;
}

.cmn-toggle-switch__htx.active span::before {
  top: 0;
  transform: rotate(45deg);
}

.cmn-toggle-switch__htx.active span::after {
  bottom: 0;
  transform: rotate(-45deg);
}

.cmn-toggle-switch__htx.active span::before,
.cmn-toggle-switch__htx.active span::after {
  transition-delay: 0, 0.3s;
}

/* Buttom show modal */

#show-modal {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: none;
  background-color: #41b88300;
  padding: 0;
  width: 100%;
  outline: none;
  cursor: pointer;
}

#show-modal span {
  width: 100%;
  height: 100%;
}

.user {
  padding-bottom: 4px;
  padding-top: 3px;
  background-color: #bed0c8;
}

.user .avatar {
  margin-left: 7px;
  width: 40px;
}

.fade-enter-active {
  transition: opacity 3s;
  /* display: block; */
}
.fade-enter {
  opacity: 0;
}
</style>
