<template>
  <div id="app">
    <Header></Header>
    <!-- <Home /> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less" >
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

body {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

a {
  color: black;

  &:hover {
    cursor: pointer;
  }
}

svg:hover {
  cursor: pointer;
}

img {
  vertical-align: middle
}

input {

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
}
</style>

