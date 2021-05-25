<template>
  <header class="header">
    <div class="header__container">
      <div class="header__centralizer"></div>
      <div class="header__title">
        <h1>Fifa Tournament</h1>
      </div>
      <nav class="header__nav nav" :class="{ 'nav-active': hamburgerIsActive }">
        <button
          @click="changeHamburger"
          type="button"
          class="hamburger"
          :class="{ 'hamburger-active': hamburgerIsActive }"
        >
          <div class="hamburger__box">
            <span class="hamburger__inner"></span>
          </div>
        </button>
        <ul class="nav__list">
          <li class="nav__item">
            <router-link link to="/" class="nav__link">Player form</router-link>
          </li>
          <li class="nav__item">
            <router-link link to="/game" class="nav__link">Game</router-link>
          </li>
          <li class="nav__item">
            <router-link link to="/about" class="nav__link"
              >About app</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      hamburgerIsActive: false,
    };
  },
  methods: {
    changeHamburger() {
      this.hamburgerIsActive = !this.hamburgerIsActive;
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin nav-animation {
  transition: all 0.3s ease-in-out;
}

@mixin hamburger-line {
  position: absolute;
  left: 0;
  background-color: white;
  width: 100%;
  height: 0.2rem;
}

.header {
  z-index: 10;
  position: fixed;
  width: 100%;
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    background-color: black;
    width: 100%;
    overflow: hidden;
  }
  &__centralizer {
    @media (min-width: 1400px) {
      flex: 0 1 26rem;
    }
    @media (min-width: 1700px) {
      flex: 0 1 30rem;
    }
    @media (min-width: 1900px) {
      flex: 0 1 35rem;
    }
    @media (min-width: 2100px) {
      flex: 0 1 40rem;
    }
    @media (min-width: 2400px) {
      flex: 0 1 40rem;
    }
    @media (min-width: 2800px) {
      flex: 0 1 45rem;
    }
  }
  &__title {
    flex: 3;
    display: flex;
    justify-content: center;
  }
  &__nav {
    flex: 2;
  }
}
.nav {
  @include nav-animation;
  position: absolute;
  top: 4rem;
  right: 0;
  transform: translateX(8rem);
  height: 100vh;
  width: 8rem;
  background-color: rgba(0, 0, 0, 1);
  &__list {
    list-style: none;
    @media (min-width: 1400px) {
      display: flex;
    }
  }
  &__link {
    position: relative;
    display: block;
    padding: 1rem;
    line-height: 3rem;
    text-decoration: none;
    color: white;
    overflow: hidden;
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      content: "";
      width: 100%;
      height: 0.2rem;
      background-color: white;
      transform: translateX(-101%);
      @include nav-animation;
    }
    &:hover::after {
      transform: translateX(0);
    }
    @media (min-width: 1400px) {
      padding: 0;
      margin-left: 2rem;
      flex: 1;
    }
  }
  &-active {
    transform: translateX(0);
  }
  @media (min-width: 1400px) {
    position: static;
    transform: translateX(0);
    height: auto;
    width: auto;
  }
}
.hamburger {
  @include nav-animation;
  display: inline-block;
  position: absolute;
  top: -3rem;
  left: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transform: translateX(-3rem);
  &__box {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;
  }
  &__inner {
    @include nav-animation;
    @include hamburger-line;
    top: 50%;
  }
  &__inner::before,
  &__inner::after {
    @include nav-animation;
    @include hamburger-line;
    content: "";
  }
  &__inner::before {
    top: 10px;
  }
  &__inner::after {
    top: -10px;
  }
  &-active &__inner {
    background-color: transparent;
  }
  &-active &__inner::before {
    transform: translateY(-10px) rotate(45deg);
  }
  &-active &__inner::after {
    transform: translateY(10px) rotate(-45deg);
  }
  &-active {
    transform: translateX(0);
  }
  @media (min-width: 1400px) {
    display: none;
  }
}
</style>
