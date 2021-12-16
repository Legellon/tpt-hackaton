<template>
 <div>
   <bar></bar>
    <sparkline></sparkline>
    <div class="cards" style="display:flex; flex-direction:row; margin-top: 2rem;"> 
    <cardminimum></cardminimum>
    <cardnow></cardnow>
    <cardmaximum></cardmaximum>
    </div>
 </div>
</template>

<script>
import bar from './components/bar.vue';
import Cardminimum from './components/cards/cardminimum.vue';
import Cardnow from './components/cards/cardnow.vue';
import Cardmaximum from './components/cards/cardmaximum.vue';

import Sparkline from './components/sparkline.vue';
export default {
  components: {bar, Sparkline, Cardminimum, Cardnow, Cardmaximum},
  name: "App",

  data: () => ({
  }),
};
</script>

<style lang="scss">


</style>
