<script setup lang="ts">
import { defineProps, defineModel } from 'vue'

interface Props {
  id?: string
  placeholder?: string
  type?: string // Например, 'text', 'password'
}
const props = defineProps<Props>()
const modelValue = defineModel<string>()
</script>

<template>
  <input
    :id="props.id"
    type="text"
    class="form-control"
    :placeholder="props.placeholder"
    v-model="modelValue"
  />
</template>

<style lang="scss">
.form-control {
  width: 100%;
  height: 60px;
  display: block;
  border: var(--content-border-width) solid var(--input-border-clr);
  border-radius: var(--input-border-radius);
  padding: 16px 24px;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
}
</style>
