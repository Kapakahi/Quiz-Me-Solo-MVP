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
     <button v-bind:key="question.id" v-for="question in questions" class="button" @click="toggleMakeQuizPage">{{question.question}}</button> 
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
      questions: []
    };
  },
  created () {
    this.getQuestions();
  },
  methods: {
    toggleMakeQuizPage() {
      this.showMakeQuiz = !this.showMakeQuiz
      this.showWelcomePage = !this.showWelcomePage;
    },
    toggleTakeQuizPage() {
      this.showTakeQuiz = !this.showTakeQuiz;
      this.showWelcomePage = !this.showWelcomePage;
    },
    getQuestions() {
      // fetching data from my server
      fetch('/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: '{ questions { question answer1 answer2 answer3 answer4 answer5 correctAnswer } }' }),
})
  .then(res => res.json())
  .then(jsonedRes => {
    console.log(jsonedRes.data);
    this.questions = jsonedRes.data.questions;
  });
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
