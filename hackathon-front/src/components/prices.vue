<template>
   <div style="display:flex; flex-direction:row"> 
    <cardminimum></cardminimum>
    <cardnow></cardnow>
    <cardmaximum></cardmaximum>
    </div>
</template>

<script>
import Cardminimum from './components/cards/cardminimum.vue';
import Cardnow from './components/cards/cardnow.vue';
import Cardmaximum from './components/cards/cardmaximum.vue';
export default {
    components: {Cardminimum, Cardnow, Cardmaximum},
}
</script>

<style>

</style>