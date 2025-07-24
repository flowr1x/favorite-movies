<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img src="../assets/logo.svg" alt="Logo" />
      </div>
      <div class="header__text">FavoriteMovies</div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  &__logo {
    img {
      width: 50px;
      height: 50px;
    }
  }
  &__container {
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
  }
  &__text {
    font-size: 32px;
    font-weight: 600;
  }
}
</style>
