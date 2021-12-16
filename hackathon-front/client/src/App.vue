<template>
 <div>
   <bar></bar>
 <sparkline></sparkline>
 <cardminimum></cardminimum>
 </div>
</template>

<script>
import bar from './components/bar.vue';
import Cardminimum from './components/cardminimum.vue';
import Sparkline from './components/sparkline.vue';
export default {
  components: {bar, Sparkline, Cardminimum},
  name: "App",

  data: () => ({
  }),
};
</script>

<style lang="scss">


</style>
