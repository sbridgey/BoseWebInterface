<template>
  <div id="app" style="margin-top:0px">
    <b-navbar toggleable="md" type="dark" variant="dark" class="margin-bottom-10">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#"><img src="./assets/bose_logo.png"></b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
      </b-collapse>
    </b-navbar>

    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    display: block;
  }

  html {
    height: 100%;
  }

  .margin-bottom-10 {
    margin-bottom: 10px;
  }

</style>
