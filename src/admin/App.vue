<template lang="pug">
  .wrapper
    .appHeader
      appHeader
    .tabs
      tabs
    .about
      about 
</template>

<script>
  export default {
    components: {
      appHeader: () => import("./components/header"),
      tabs: () => import("./components/tabs"),
      about: () => import("./components/about")
    }
  };
</script>

<style lang="pcss">

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700,800');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";

</style>