<template>
<nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!--需要与main.js配置的跳转路由一致-->
      <router-link to="/sub-app1">sub-app1</router-link> |
      <router-link to="/sub-app2">sub-app2</router-link>
    </nav>
    <router-view/>
    <!--微应用在此展示-->
	<div id="container"></div>
  <img alt="Vue logo" src="./assets/logo.png">

</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
