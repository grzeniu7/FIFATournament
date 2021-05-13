<template>
  <form class="form" @submit.prevent="addPlayer">
    <div
      class="form__container"
      :class="{ form__invalid: !playerName.isValid }"
    >
      <label for="name" class="form__item">Wpisz nazwę gracza:</label>
      <input
        :class="{ 'form__input--invalid': !playerName.isValid }"
        class="form__item form__input"
        type="text"
        name="name"
        id="name"
        placeholder="Gracz"
        v-model.trim="playerName.val"
        maxlength="15"
        @blur="checkValue"
      />
    </div>
    <p class="form__info" v-if="!playerName.isValid">
      Nazwa gracza nie może być pusta, dłuższa niz 15 znaków oraz zawierać cyfr
      i polskich znakow
    </p>
    <div
      class="form__container"
      :class="{ form__invalid: !playerTeam.isValid }"
    >
      <label for="team" class="form__item">Wpisz nazwę drużyny:</label>
      <input
        :class="{ 'form__input--invalid': !playerTeam.isValid }"
        class="form__item form__input"
        type="text"
        name="team"
        id="team"
        placeholder="Drużyna"
        v-model.trim="playerTeam.val"
        maxlength="15"
        @blur="checkValue"
      />
    </div>
    <p class="form__info" v-if="!playerTeam.isValid">
      Nazwa drużyny nie może być pusta, dłuższa niz 15 znaków oraz zawierać cyfr
      i polskich znakow
    </p>
    <base-button type="submit">Dodaj gracza !</base-button>
  </form>
</template>

<script>
export default {
  props: ["competitors"],
  emits: ["send-data"],
  data() {
    return {
      playerName: {
        val: "",
        isValid: true,
      },
      playerTeam: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
      error: false,
      // competitors: [
      // { id: 1, name: "Grzechu", team: "Real" },
      // { id: 2, name: "Doncia", team: "Barka" },
      // { id: 3, name: "Luki", team: "Ten tempy chuj za Arsenalem" },
      // { id: 4, name: "Mucha", team: "Chuj wie" },
      // { id: 5, name: "Kacper", team: "Zwinny jak polamany wengosz" },
      // { id: 5, name: "Mosiu", team: "Haczy nosem o poprzeczke" },
      // ],
    };
  },
  methods: {
    validateForm() {
      this.formIsValid = true;
      if (
        this.playerName.val === "" ||
        this.playerName.val.length < 3 ||
        !/^[a-z A-Z]+$/.test(this.playerName.val)
      ) {
        this.playerName.isValid = false;
        this.formIsValid = false;
      }
      if (
        this.playerTeam.val === "" ||
        this.playerTeam.val.length < 3 ||
        !/^[a-z A-Z]+$/.test(this.playerTeam.val)
      ) {
        this.playerTeam.isValid = false;
        this.formIsValid = false;
      }
    },

    addPlayer() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const id = this.competitors.length;
      const player = {
        id: id + 1,
        name: this.playerName.val,
        team: this.playerTeam.val,
      };
      // this.competitors.push(player);
      // console.log(player);
      this.$emit("send-data", player);
      // this.competitors = [];
      this.playerName.val = "";
      this.playerTeam.val = "";
    },

    checkValue() {
      if (
        this.playerName.val != "" &&
        this.playerName.val.length >= 3 &&
        /^[a-z A-Z]+$/.test(this.playerName.val)
      ) {
        this.playerName.isValid = true;
      }
      if (
        this.playerTeam.val != "" &&
        this.playerTeam.val.length >= 3 &&
        /^[a-z A-Z]+$/.test(this.playerTeam.val)
      ) {
        this.playerTeam.isValid = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  margin: 2rem 0;
  padding: 20px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  &__container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 30rem;
    @media (min-width: 500px) {
      flex-direction: row;
    }
  }
  &__item {
    flex: 1;
    padding: 0.3rem;
    margin: 0.2rem;
    @media (min-width: 500px) {
      padding: 0.5rem;
      margin: 0.5rem;
    }
  }
  &__input {
    background-color: rgba(255, 255, 255, 0.2);
    text-align: center;
    border: 0.1rem solid white;
    caret-color: white;
    color: white;
    &--invalid {
      border-color: rgba(143, 0, 0, 1);
      background-color: rgba(143, 0, 0, 1);
    }
    &::placeholder {
      color: white;
    }
    &:focus {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  &__info {
    margin: 1rem;
    padding-bottom: 0.1rem;
    border: 0.1rem solid white;
    border-top: none;
  }
  &__invalid {
    color: rgba(255, 0, 0, 1);
  }
}
</style>
