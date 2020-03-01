<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg="Welcome plis"/>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue'
  export default {
    components: {HelloWorld}
  }  
</script>