<template lang="pug">
.quest
  .quiz--page
    .quiz--cont(v-for="(question, index) in g_quiz.questions" :key="g_quiz.id")
      div(v-show="index === questionIndex")
        .quiz--step вопрос {{ index + 1 }} из {{g_quiz.questions.length}}
        <!-- Вопросы: показывать div для каждого вопроса -->
        .quiz
          .quiz--quest {{ question.text }}
          ol.quiz--answer
            <!-- Ответы: Показывать li с радио-кнопкой для каждого возможного ответа -->
            li(v-for="response in question.responses" :key="question.id")
              <!-- Радио-кнопка имеет 3 новые директивы -->
              <!-- v-bind:value устанавливает "value" в значение "true" если ответ правильный -->
              <!-- v-bind:name устанавливает "name" в значение индекса вопроса для группировки ответов по вопросу -->
              <!-- v-model создает связь с userResponses -->
              button.quiz-btn(v-on:click="next(question.text, response.text)")
                span {{response.text}}
  footer.footer
    a.footer--logo(href="https://lilysamer.com/")
      img(src="@/assets/img/flogo.jpg")
    .footer--slogan LilySamer Interior
    a.soc-inst(target="_blank" href="https://www.instagram.com/lilysamer_interior/")
      img(src="@/assets/img/s-in.svg")

</template>

<script>
/* https://habr.com/ru/post/336328/ */
import axios from 'axios';
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Quiz",
  data () {
    return {
      // Хранит индекс текущего вопроса
      questionIndex: 0,
      answerTitle: '',
      answerCheck: '',
      localQuiz: [],
      newAnswer: null,
      ShowPage: 3,
    }
  },
  components: {},
  computed: mapGetters(['g_quiz']),
  // Представление вызовет эти методы при клике
  methods: {
    ...mapActions(['GET_QUIZ_FROM_API']),
    ...mapMutations(['SET_QUIZ_ANSWER']),
    // Перейти к следующему вопросу
    // чтобы передать значения в метод next(функция), в кнопке нужно писать вот так
    // button.quiz-btn(v-on:клик="название метода(первый параметр, второй параметр ...)"
    // button.quiz-btn(v-on:click="next(question.text, response.text)"
    next: function(answerTitle, answerCheck) {
      // переходим к следующему вопросу
      this.questionIndex++;
      console.log(this.localQuiz);

      // тут я хз читал тут (https://ru.vuejs.org/v2/cookbook/client-side-storage.html ), видимо записываем в локальное хранилище
      // console.log(answerTitle, answerCheck);
      // this.НАЗВАНИЕ_МУТАЦИИ_ИЗ_STORE_quiz.ts(передаем два параметра {answerTitle, answerCheck}), далее вся обработка идет внутри функции из store файла
      // запись в локальное хранилище
      //this.localQuiz.push({answerTitle, answerCheck});
      // запись в мутацию в хранилище
      this.SET_QUIZ_ANSWER({answerTitle, answerCheck});

      // если вопрос был последним
      if (this.questionIndex === this.g_quiz.questions.length) {
        this.$emit('isthanks', 3)

      }
    },
  },
  mounted() {
    this.GET_QUIZ_FROM_API();
  },
}
</script>

<style scoped lang="stylus">
.quest
  display flex
  flex-direction column
  justify-content space-between
  height 100vh
.quiz
  max-width 350px
  margin 0 auto
  &--page
    background rgba(0,0,0, .3)
    position relative
    padding 10px
    display flex
    align-items center
    justify-content center
    flex 1 1 auto
    text-align center
    &:after
      z-index -1
      background url(../../assets/img/bg.jpg) #000 50% 0 no-repeat
      background-size cover
      content " "
      width 100%
      height 100%
      position absolute
      top 0
      left 0
  &--cont
    font-size 16px
  &--step
    padding-bottom 20px
  &--quest
    background #262626
    color #fff
    font-size 21px
    border-radius 10px 10px 0 0
    padding 15px
    display block
  &--answer
    padding 20px 10px 10px
    background #fff
    color #2f2f2f
    border-radius 0 0 10px 10px
    display block
    list-style none
    li
      display block
      margin-bottom 10px
      .quiz-btn
        display flex
        justify-content flex-start
        align-items center
        padding 5px 10px 5px 40px
        font-size 14px
        font-weight 500
        width: 100%
        background: none
        border 1px solid #cecece
        border-radius 25px
        min-height 42px
        position relative
        span
          display block
          text-align left
        &:hover, &:active
          background: #cecece
        &:before
          content "A"
          font-weight 500
          font-size 13px
          position absolute
          top 9px
          left 9px
          color #000
          text-align center
          background #fff
          border 1px solid #000
          border-radius 50%
          line-height 13px
          display flex
          justify-content center
          align-items center
          width 21px
          height 21px
      &:nth-child(2) .quiz-btn:before
        content "B"
      &:nth-child(3) .quiz-btn:before
        content "C"
      &:nth-child(4) .quiz-btn:before
        content "D"
      &:nth-child(5) .quiz-btn:before
        content "E"
      &:nth-child(6) .quiz-btn:before
        content "F"
      &:nth-child(7) .quiz-btn:before
        content "G"
.footer
  background #fff
  display flex
  align-items center
  justify-content space-between
  padding 10px

  &--logo
    display block
    height 35px
    width 35px
  &--slogan
    display block
    font-size 20px
    font-weight 500
    text-align center
    color #000
  .soc-inst
    display block
    height 35px
    width 35px
</style>
