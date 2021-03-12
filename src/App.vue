<template>
  <div id="app">
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
    <!-- <router-view></router-view> -->
    <!-- <router-view></router-view> -->
    <keep-alive exclude="Details">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
// import TabBar from "components/common/TabBar"
import MainTabBar from "components/content/MainTabBar"

export default {
  name: 'App',
  components: {
    // TabBar,
    MainTabBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";

  .main-tab-bar {
    z-index: 9;
  }
</style>
