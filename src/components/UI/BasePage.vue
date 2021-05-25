<template>
  <div class="background">
    <div class="page">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  max-width: 50rem;
  margin: 0 auto;
  padding: 1rem;
}
.background {
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
