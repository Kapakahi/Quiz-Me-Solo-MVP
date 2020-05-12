<template>
  <div class="make">
    <h1 class = title>Create your own Quiz</h1>
    <h2 class = questionInput>Please enter your question:</h2>
    <div className="form-group">
      <input type="text" placeholder="Question" name="question" value=Question o
      v-on:change="e => setQuestion(e)"/>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'MakeQuizPage',
  props: {
    msg: String
  },
  method: {
    setQuestion: function(inputtedQuestion) {
      this.question=inputtedQuestion.target.value;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.form-group {
  margin: 1.2rem 0;
}
</style>
