<template>
  <div class="take">
    <h1 class = title>Take a Quiz</h1>
    <button  
      v-for="question in questions" 
      v-bind:key="question.id"  
      class="button" @click="toggleMakeQuizPage">
      {{question.question}}
      <button @click="updateUserAnswer(question.answer1), 
        checkUserAnswer(question.correctAnswer), console.log(data(), DATAAAAA)" 
        class="answerButton"> 
        {{question.answer1}}
      </button>
      <button @click="updateUserAnswer(question.answer2), 
        checkUserAnswer(question.correctAnswer)" 
        class="answerButton">
        {{question.answer2}}
      </button>
      <button @click="updateUserAnswer(question.answer3), 
        checkUserAnswer(question.correctAnswer)" 
        class="answerButton">
        {{question.answer3}}
      </button>
      <button @click="updateUserAnswer(question.answer4), 
        checkUserAnswer(question.correctAnswer)" 
        class="answerButton">
        {{question.answer4}}
      </button>
    </button> 
    <div class="result">Your score is:  {{totalQuestionsAnswered  }} /  {{numCorrect}}</div>
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
      questions: [],
      numCorrect: 0,
    totalQuestionsAnswered: 0
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
    },
    updateUserAnswer(answer) {
      this.userAnswer = answer
      //console.log(answer, "answereerrrrrr")
    },
    checkUserAnswer(realAnswer) {
     // console.log(this.userAnswer, "userANSWERRRRRRRR")
      //console.log(realAnswer, "REALLL ANSEWERERERER")
      if (this.userAnswer === realAnswer) {
          console.log("Yes, that's correct!!!")
         
          this.numCorrect = this.numCorrect + 1;
          this.totalQuestionsAnswered = this.totalQuestionsAnswered + 1;
      } else {
          console.log("You chose " + `"${this.userAnswer}"` +", I'm sorry, that's incorrect...")
          return this.totalQuestionsAnswered = this.totalQuestionsAnswered + 1;
      }

    }
  },
  state: {
    userAnswer: "",
    numCorrect: 0,
    totalQuestionsAnswered: 0
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

.answerButton {
  margin-right: 3px;
  margin-left: 2px;
}

</style>
