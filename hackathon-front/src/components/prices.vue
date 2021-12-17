<template>
   <div class="cards"> 
    <cardminimum></cardminimum>
    <cardnow></cardnow>
    <cardmaximum></cardmaximum>
    </div>
</template>

<script>
import Cardminimum from './cards/cardminimum.vue';
import Cardnow from './cards/cardnow.vue';
import Cardmaximum from './cards/cardmaximum.vue';
export default {
    components: {Cardminimum, Cardnow, Cardmaximum},
}
</script>

<style>

</style>