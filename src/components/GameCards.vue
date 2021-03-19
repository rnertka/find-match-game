<template>
  <div class="game-area">
    <p> {{answer}} </p>
    <h1 class="title">Can you guess the cat-card you are holding ?</h1>
    <h4 class="description">
      Select a card from you can see. Than click on yours!
    </h4>
    <div class="container">
      <transition-group
        enter-active-class="animate__animated animate__flip"
        appear
      >
        <app-card
          v-for="card in cards"
          :key="card.id"
          :cat="card"
          @click="selectedCard = card.id"
          :class="{ shadow: selectedCard == card.id }"
        ></app-card>
      </transition-group>
    </div>
    <div class="container">
      <transition
        enter-active-class="animate__animated animate__bounceIn"
        leave-active-class="animate__animated animate__bounceOut"
        mode="out-in"
      >
        <component
          :is="activeCard"
          @click="showCard(answer)"
          :cat="answer"
        ></component>
      </transition>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import DefaultCard from "./DefaultCard";

export default {
  components: {
    appCard: Card,
    appDefaultCard: DefaultCard,
  },
  data() {
    return {
      cards: [
        { id: 1, component: "app-card", image: require("@/assets/card-1.jpg") },
        { id: 2, component: "app-card", image: require("@/assets/card-2.jpg") },
        { id: 3, component: "app-card", image: require("@/assets/card-3.jpg") },
        { id: 4, component: "app-card", image: require("@/assets/card-4.jpg") },
        { id: 5, component: "app-card", image: require("@/assets/card-5.jpg") },
      ],

      selectedCard: null,

      answer: {},

      activeCard: "app-default-card",
    };
  },
  mounted() {
    let answer = Math.ceil(Math.random() * this.cards.length);
    this.answer = this.cards[answer - 1];
  },

  methods: {
    showCard(answer) {
      if (this.selectedCard == null) {
        alert("You must select a card first!");
      } else {
        this.activeCard = answer.component;
        setTimeout(() => {
          if (answer.id == this.selectedCard) {
            this.eBus.emit("isCorrectEvent","app-celebrate")
          } else {
            this.eBus.emit("isCorrectEvent","app-failure")
          }
        }, 1750);
      }
    },
  },
};
</script>

<style scoped>
.game-area {
  width: 100%;
  height: 100%;
  background: lightgray;
  position: absolute;
  top: 0px;
  left: 0px;
}
.title,
.description {
  text-align: center;
}
.title {
  color: orangered;
}
.description {
  color: orange;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}

.shadow {
  box-shadow: 0px 5px 48px #30969f !important;
  transition: box-shadow 0.5s;
}
</style>
