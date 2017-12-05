<template>
  <div class="container">
    <div class="row">
      <homeTile></hometile>
    </div>
  </div>
</template>

<script>
import homeTile from './homeTile.vue'
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
