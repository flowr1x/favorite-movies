<script setup lang="ts"></script>

<template>
  <button class="btn">
    <slot>Button</slot>
  </button>
</template>

<style lang="scss" scroped>
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

  &:hover {
    color: var(--white);
    background: var(--primary);
  }
}
</style>
