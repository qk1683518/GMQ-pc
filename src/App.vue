<template>
  <div id="app">
    <headerc />
    <router-view/>
    <footerc />
  </div>
</template>

<script>
import headerc from "./components/common/headerc";
import footerc from "./components/common/footerc";

export default {
  name: 'App',
  components: {
      headerc,
      footerc
  }
}
</script>

<style>

</style>
