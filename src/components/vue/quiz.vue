<template lang="pug">
.quest
  .quiz--page
    .quiz--cont

      .quiz--step вопрос 1 из 4
      <!-- Вопросы: показывать div для каждого вопроса -->
      .quiz(v-for="question in g_quiz.questions" :key="g_quiz.id")
        .quiz--quest {{ question.text }}
        ol.quiz--answer
          <!-- Ответы: Показывать li с радио-кнопкой для каждого возможного ответа -->
          li(v-for="response in question.responses" :key="question.id")
            button.quiz-btn {{response.text}}

  footer.footer
    a.footer--logo(href="/")
      img(src="@/assets/img/flogo.jpg")
    .footer--slogan LilySamer Interior
    a.soc-inst(href="#")
      img(src="@/assets/img/inst.jpg")

</template>

<script>

import { mapGetters, mapActions } from "vuex";
export default {
  name: "Quiz",
  components: { },
  computed: mapGetters(['g_quiz']),
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
    background rgba(0,0,0, .4)
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
        align-items center
        padding-left 40px
        font-size 14px
        font-weight 500
        width: 100%
        background: none
        border 1px solid #cecece
        border-radius 25px
        min-height 36px
        position relative
        &:hover, &:active
          background: #cecece
        &:before
          content "A"
          font-weight 500
          font-size 13px
          position absolute
          top 6px
          left 9px
          color #000
          text-align center
          background #fff
          border 1px solid #000
          border-radius 50%
          line-height 22px
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
