<script setup lang="ts"></script>

<template>
  <button class="btn">
    <slot>Button</slot>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 16px 24px;
  border: var(--btn-border-width) solid var(--btn-border-clr);
  border-radius: var(--btn-border-radius);
  background: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  transition-duration: 0.3s;
  color: var(--dark);
  transition-property: background, color;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;

  &:hover {
    color: var(--white);
    background: var(--primary);
  }
}
.router-link-active.btn,
.router-link-exact-active.btn {
  color: var(--white);
  background: var(--primary);
}
</style>
