<template>
  <NavBar/>
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/shared/NavBar"

export default {
  name: "App",
  components: {
    NavBar,
  }
}
</script>

<style lang="scss">

</style>
