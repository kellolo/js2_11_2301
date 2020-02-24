<template>
  <div class="about">
    <hello msg="TEST MESSAGE" />
  </div>
</template>

<script>
  import hello from '../components/HelloWorld.vue';

  export default {
    name: 'About',
    components: {
      hello
    }
  }
</script>
