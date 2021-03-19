<template>
  <div class="container">
      <h1>YOU FOUND THE CORRECT CARD!</h1>
      <button @click="newGame">New Game</button>
  </div>
</template>

<script>
export default {
  methods: {
    newGame() {
      this.eBus.emit("isCorrectEvent", "app-game-cards");
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  left: 0px;
}
.container h1 {
  text-align: center;
  font-size: 333%;
  color: darkgreen;
  opacity: 0.5;
}
.container button {
  cursor: pointer;
  width: 200px !important;
  background-color: #fff;
  color: darkgreen;
  border: 1px solid darkgreen;
  height: 50px !important;
  font-size: 18px;
  border-radius: 5px;
  outline: none;
  font-weight: bold;
}
.container button:hover {
  background-color: darkgreen;
  color: #fff;
  transition: all 0.4s;
}
</style>
