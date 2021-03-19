<template>
  <transition
    enter-active-class="animate__animated animate__jackInTheBox"
    leave-active-class="animate__animated animate__rollOut"
    mode="out-in"
  >
    <component :is="activeComponent"></component>
  </transition>
</template>

<script>
import GameCards from "./components/GameCards";
import Celebrate from "./components/Celebrate";
import Failure from "./components/Failure";

export default {
  data() {
    return {
      activeComponent: "app-game-cards",
    };
  },
  components: {
    appGameCards: GameCards,
    appCelebrate: Celebrate,
    appFailure: Failure,
  },
  mounted() {
    this.eBus.on("isCorrectEvent", (isCorrect) => {
      this.activeComponent = isCorrect;
    });
  },
};
</script>

<style>
body {
  font-family: sans-serif;
}
</style>
