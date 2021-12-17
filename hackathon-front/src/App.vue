<template>
 <div>
   <bar></bar>
    <sparkline></sparkline>
    <prices></prices>
 </div>
</template>

<script>
import bar from './components/bar.vue';
import Sparkline from './components/sparkline.vue';
import Prices from './components/prices.vue';
export default {
  components: {bar, Sparkline, Prices},
  name: "App",

  data: () => ({
  }),
};
</script>

<style lang="scss">


</style>
