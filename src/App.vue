<template>
  <div id="app">
    <Welcome />
    <button class="button" @click="toggleMakeQuizPage">Make a quiz</button>
    <button class="button" @click="toggleTakeQuizPage">Take a quiz</button>
    <MakeQuizPage 
      v-if="showMakeQuiz"
     />
    <TakeQuizPage
      v-if="showTakeQuiz"
    />   
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue';
import MakeQuizPage from './components/MakeQuizPage.vue';
import TakeQuizPage from './components/TakeQuizPage.vue';

export default {
  name: 'App',
  components: {
    Welcome,
    MakeQuizPage,
    TakeQuizPage
  },
  data() {
    return {
      showMakeQuiz: false,
      showTakeQuiz: false,
    };
  },
  methods: {
    toggleMakeQuizPage() {
      this.showMakeQuiz = !this.showMakeQuiz
      this.showWelcomePage = !this.showWelcomePage;
      
    },
    toggleTakeQuizPage() {
      this.showTakeQuiz = !this.showTakeQuiz;
      this.showWelcomePage = !this.showWelcomePage;
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.button {
  display: flex;
  background-color: rgb(58, 209, 202);
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: transparent;
  border: 2px solid rgb(58, 209, 202);
  color: rgb(58, 209, 202)
}
</style>
