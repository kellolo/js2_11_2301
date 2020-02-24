<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 341px;

  a {
    font-weight: bold;
    color: #ebf0f5;
    text-decoration: none;
    text-transform: uppercase;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
