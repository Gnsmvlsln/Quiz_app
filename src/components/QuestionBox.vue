<template>
  <div class="Question-box-container">
      <b-jumbotron>

    <template v-slot:lead>
      {{currentQuestion.question}}
    </template>

    <hr class="my-4">
    <b-list-group class="list-group">
      <b-list-group-item 
      class="list-group-item"
      v-for="(answer,index) in answers" 
      v-bind:key="index"
      @click="selectAnswer(index)"
      :class="answerClass(index)"
      >
        {{answer}}
      </b-list-group-item>
    </b-list-group>

    <b-button variant="primary" href="#" class="btn" @click="submitAnswer" 
    :disabled="selectedIndex === null  || answered">Submit</b-button>
    <b-button @click="next" variant="success" href="#">Next</b-button>
  </b-jumbotron>
  </div>
</template>
<script>
import _ from "lodash";

export default {
  name:'QuestionBox',
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function
  },
  data(){
    return {
          selectedIndex: null,
          correctIndex: null,
          shuffledAnswers : [],
          answered: false
    }
  },
  watch:{
    currentQuestion :{
      immediate: true,
      handler(){
        this.selectedIndex = null;
        this.answered = false
        this.shuffledAnswer()
      }
    }
    // (){
    //   this.selectedIndex = null;
    //   this.shuffledAnswer()
    // }
  },
  methods:{
    selectAnswer(index){
      this.selectedIndex = index;
      console.log(index);
    },
    submitAnswer(){
      let isCorrect = false;

      if(this.selectedIndex === this.correctIndex){
        isCorrect = true;
      }
      this.answered = true;

      this.increment(isCorrect)
    },
    shuffledAnswer(){
      let answers =[...this.currentQuestion.incorrect_answers,this.currentQuestion.correct_answer];
      this.shuffledAnswers = _.shuffle(answers);
      this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)
    },
    answerClass(index){
      let answerClass =''

      if(!this.answered && this.selectedIndex === index){
        answerClass = 'selected'
      }else if(this.answered && this.correctIndex === index){
        answerClass ='correct'
      }else if(this.answered &&
       this.selectedIndex === index &&
       this.correctIndex !== index){
        answerClass = 'incorrect'
      }

      return answerClass

    }
  },
  computed:{
    answers(){
      let answers =[...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      return answers;
    }
  }
}
</script>
<style scoped>
.list-group {
  padding-bottom: 10px;
}
.list-group-item:hover{
  background: #EEE;
  cursor: pointer;
}
.btn {
  margin:0 5px;
}
.selected {
  background-color: lightblue;
}
.correct {
  background-color: lightgreen;
}
.incorrect {
  background-color: red;
}
</style>
