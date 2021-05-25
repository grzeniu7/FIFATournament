<template>
  <base-page>
    <div class="description">
      <h2 class="description__title">Fifa Tournament App</h2>
      <div class="description__container">
        <p class="description__text">
          This app was created for friends who want to play some fifa
          tournament.
        </p>
        <p class="description__text">To use it properly follow the rules:</p>
        <ol class="description__list list">
          <li class="list__item">
            App is ready for tournaments with even number of players
          </li>
          <li class="list__item">
            To add players to tournament list go
            <router-link class="list__link" to="/">here</router-link>
          </li>
          <li class="list__item">
            When players list is ready click "Start the game!" button to make it
            start
          </li>
          <li class="list__item">
            Add game result in game form and click "Confirm result" to add
            result to table
          </li>
          <li class="list__item">
            Live tournament table will spawn beneeth timetable after
            confirmitation of one of tournament games
          </li>
          <li class="list__item">
            Have fun! Let the best win!
          </li>
        </ol>
      </div>
    </div>
  </base-page>
</template>

<style lang="scss" scoped>
.description {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin: 0 auto;
  margin-top: 10rem;
  background-color: rgba(0, 0, 0, 0.8);
  // height: 100vh;
  // display: block;
  // font-size: 20rem;
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  &__text {
    line-height: 1.3rem;
  }
  &__list {
    margin-top: 1rem;
    margin-left: 2rem;
  }
}
.list {
  &__item {
    margin-top: 0.5rem;
  }
  &__link {
    display: inline-block;
    text-decoration: none;
    color: turquoise;
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: translateX(0.5rem);
    }
  }
}
</style>
