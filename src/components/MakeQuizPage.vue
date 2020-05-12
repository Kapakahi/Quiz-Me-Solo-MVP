<template>
  <div class="make">
    <h1 class = title>Create your own Quiz</h1>
    <h2 class = questionInput>Please enter your question:</h2>
    <div class="form-group">
      <input class = "form" type="text" placeholder="Question" name="question" value=Question o
      v-on:change="e => setQuestion(e)"/>
      <button class="button"> Submit </button>
    </div>
    <div class="form-group">
      <input class = "form" type="text" placeholder="Question" name="question" value=Question o
      v-on:change="e => setQuestion(e)"/>
      <button class="button"> Submit </button>
    </div>
    <div class="form-group">
      <input class = "form" type="text" placeholder="Question" name="question" value=Question o
      v-on:change="e => setQuestion(e)"/>
      <button class="button"> Submit </button>
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

.form {
  
  width: 80%;
  color:green;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid red;
  border-radius: 4px;
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
  margin-left: 7px;
  margin-bottom: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: transparent;
  border: 2px solid rgb(58, 209, 202);
  color: rgb(58, 209, 202)
}

</style>
