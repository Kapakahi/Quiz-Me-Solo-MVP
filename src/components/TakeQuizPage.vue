<template>
  <div class="take">
    <h1 class = title>Take a Quiz</h1>
    <button  
      v-for="question in questions" 
      v-bind:key="question.id"  
      class="button" @click="toggleMakeQuizPage">
      {{question.question}}
      {{question.answer1}}
      {{question.answer2}}
      {{question.answer3}}
      {{question.answer4}}
    </button> 
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
  margin-bottom: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: transparent;
  border: 2px solid rgb(58, 209, 202);
  color: rgb(58, 209, 202)
}

</style>
