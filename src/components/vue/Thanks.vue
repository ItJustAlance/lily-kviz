<template lang="pug">
.thanks
  .thanks--page
    .thanks--cont
      .thanks-title Введите вашу почту и номер, <br>мы вышлем вам стоимость, сроки. <br>И проведём консультацию.
      .thanks--form
        .thanks-error(v-if="errors.length")
          ul
            li(v-for="error in errors") {{ error }}

        .row-form
          label Почта:
          input(type="text" v-model="userName")
        .row-form
          label Телефон:
          input(type="text"  v-model="userPhone")
        .row-form-button
          button(v-on:click="submitData()") Получить расчет
//
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
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Thanks",
  data () {
    return {
      errors: [],
      userPhone: null,
      userName: null,
    }
  },

  // вычисляемые свойства
  mounted() {
    // console.log(this.g_quizAnswer);
    // Send a POST request

  },
  computed: {
    // выводим из store геттер функцию
    ...mapGetters(['g_quizAnswer']),
  },
  methods: {
    submitData:function (){
      // если почта и телефон заполнены, то отправляем форму
      if (this.userName && this.userPhone) {
        axios({
          method: 'post',
          headers: { 'Content-Type': 'multipart/form-data' },
          url: 'https://lilysamer.com/quiz/quiz.php',
          data: {
            body: this.g_quizAnswer,
            userPhone: this.userPhone,
            userName: this.userName
          }
        })
          // при успешной отправке
          .then(function (response) {
            console.log(response);
            // перенаправление на страницу спасибо
            setTimeout(function(){
              window.location.href = 'https://lilysamer.com/project/spasibo.php';
            }, 100);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log('succ');
      }
      this.errors = [];

      if (!this.userName) {
        this.errors.push('Пожалуйста, введите email.');
      }
      if (!this.userPhone) {
        this.errors.push('Пожалуйста, введите телефон.');
      }


    },
  },

}
</script>

<style scoped lang="stylus">
*
  outline none !important
.thanks
  display flex
  flex-direction column
  justify-content space-between
  height 100vh
  &-error
    color #b80505
    padding-bottom 15px
  &--cont
    max-width 290px
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
  &-title
    font-size 16px
    text-align center
    padding 0 0 15px
  &--form
    font-size 14px
    background #fff
    border-radius 10px
    padding 10px 25px
    max-width 290px
    margin 0 auto
    color #303030
    font-weight 500
    text-align left
    .row-form
      margin-bottom: 10px
    label
      display block
      padding-bottom 4px
    input
      border 1px solid #303030
      border-radius 5px
      padding 8px 5px
      width 100%
      outline none !important
      font-weight 400
    .row-form-button
      margin 0 -25px -10px
      padding-top 15px
    button
      background #b80505
      border-radius 0 0 10px 10px
      width 100%
      padding 15px 5px
      font-size 16px
      text-align center
      color #fff
      display block
      cursor pointer
      &:hover
        opacity .8
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
        padding 5px 10px 5px 40px
        font-size 14px
        font-weight 500
        width: 100%
        background: none
        border 1px solid #cecece
        border-radius 25px
        min-height 42px
        position relative
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
          line-height 20px
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
