<template>
  <div class="take">
    <h1 class = title>Take a Quiz</h1>
    <button  v-for="question in questions" v-bind:key="question.id"  class="button" @click="toggleMakeQuizPage">{{question.question}}</button> 
  </div>
</template>

<script>
export default {
  name: 'TakeQuizPage',
  props: {
    msg: String
  },
   created () {
    this.getQuestions();
  },  
  data() {
    return {
      questions: []
    };
  },
  methods: { 
    getQuestions() {
      // fetching data from my server
      fetch('/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: '{ questions { question answer1 answer2 answer3 answer4 correctAnswer } }' }),
      })    
  .then(res => res.json())
  .then(jsonedRes => {
    console.log(jsonedRes.data, "!!!!!!!");
    this.questions = jsonedRes.data.questions;
  });
    }
  }
}  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
