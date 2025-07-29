<script setup lang="ts"></script>

<template>
  <div class="form-wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.form-wrapper {
  position: relative;
  height: 60px;
  width: 100%;

  & .form-control {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & .label {
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translate(0, -50%);
  }
}

.form-control:focus + .label,
.form-control:not(:placeholder-shown) + .label,
.label.active {
  top: 0;
  transform: translateY(-50%);
  background-color: var(--white);
  padding: 0 8px;
}
</style>
