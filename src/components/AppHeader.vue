<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BaseButton from './UI/BaseButton.vue'
</script>
<template>
  <header class="header">
    <div class="header__container">
      <div class="header__top">
        <div class="header__logo">
          <img
            src="../assets/logo.svg"
            alt="Logo"
          />
        </div>
        <div class="header__text">FavoriteMovies</div>
      </div>
      <nav class="nav">
        <ul class="nav-list">
          <li>
            <router-link
              to="/"
              class="btn"
              custom
              v-slot="{ navigate, isActive }"
            >
              <BaseButton
                :class="{ 'router-link-active': isActive }"
                @click="navigate"
              >
                Search
              </BaseButton>
            </router-link>
          </li>
          <li>
            <router-link
              to="/watched"
              class="btn"
              custom
              v-slot="{ navigate, isActive }"
            >
              <BaseButton
                :class="{ 'router-link-active': isActive }"
                @click="navigate"
              >
                Watched
              </BaseButton>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
@mixin flex-block {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
}
.header {
  &__logo {
    img {
      width: 50px;
      height: 50px;
    }
  }
  &__container {
    @include flex-block;
    flex-direction: column;
  }
  &__text {
    font-size: 32px;
    font-weight: 600;
  }
  &__top {
    @include flex-block;
  }
}
.nav-list {
  display: flex;
  gap: 16px;
}
</style>
