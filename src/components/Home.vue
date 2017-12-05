<template>
  <div class="container">
    <div class="row">
      <homeTile></hometile>
      <nowPlaying></nowplaying>
    </div>
  </div>
</template>

<script>
import homeTile from './Tiles/homeTile.vue'
export default {
  name: 'Home',
  components: {
    'homeTile': homeTile
  },
  data() {
    return {
    };
  }
};
</script>
