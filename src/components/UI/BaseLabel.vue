<script setup lang="ts"></script>

<template>
  <label class="label"><slot></slot></label>
</template>

<style lang="scss">
.label {
  font-size: 16px;
  transition:
    top 0.3s,
    padding 0.3s;
}
</style>
