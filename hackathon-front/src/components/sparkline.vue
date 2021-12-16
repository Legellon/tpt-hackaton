<template>
  <v-container fluid>
<!--     <ul id="example-1">
    <li v-for="valu in value" :key="valu">
      {{ valu}}
    </li>
    </ul> -->
    <v-sparkline
      :fill="fill"
      :type="trend"
      :gradient="selectedGradient"
      :line-width="width"
      :padding="padding"
      :smooth="radius || false"
      :labels="time"
      :label-size="size"
      :value="value"
      :auto-draw-duration="4000"
      auto-draw
    ></v-sparkline>

    <v-divider></v-divider>

    <v-row>
        <v-row
          class="fill-height"
          align="center"
        >
        </v-row>
    </v-row>
  </v-container>
</template>

<script>
  const gradients = [
    ['#d57276']
  ]

  export default {
    data: () => ({
      fill: true,
      selectedGradient: gradients[0],
      gradients,
      padding: 8,
      radius: 2,
      value: [160, 146, 133, 146, 152, 155, 178, 198, 156, 145, 156, 141, 163, 144, 153, 177, 145, 132, 145, 154, 167, 152, 143, 156,],
      time: ["00:00","01:00", "02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],
      width: 2,
      size: 4
    }),        
  }

</script>