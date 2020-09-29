<template lang="pug">
.page
  .main-cont
    h1 Узнайте за 2 минуты стоимость дизайн&minus;проекта, ответив на 4 вопроса
    button.btn-start-quiz(v-on:click="onShowQuiz") Узнать стоимость и срок
    .bottom-help После прохождения теста вы получите: <br><br>
      | 1. расчет стоимости вашего дизайн-проекта <br>
      | 2. сроки разработки проекта

</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "MainPage",
  data () {
    return {
      // передаем значение true в родителя
      ShowQuiz: true,
    }
  },
  components: {

  },
  computed:{

  },

  methods:{
    // вызываем метод onShowQuiz который передает  ShowQuiz: true
    onShowQuiz(){
      this.$emit('isquiz', true)
      // console.log(this.$emit);
    },
  },
};


</script>

<style lang="stylus">
.page
  background rgba(0,0,0, .4)
  position relative
  padding 10px
  display flex
  align-items center
  justify-content center
  &:after
    z-index -1
    background url(../../assets/img/bg2.jpg) #000 50% 0 no-repeat
    background-size cover
    content " "
    width 100%
    height 100%
    position absolute
    top 0
    left 0
  h1
    font-size 29px
    line-height 1.4
    margin 0 auto 10vh
    padding 0 15px
    @media(max-width 750px) {
      max-width 340px
      padding 0
    }
  .btn-start-quiz
    font-size 19px
    margin-bottom 10vh
    font-weight 500
    border-radius 3px
    background #b80505
    border none
    color #fff
    padding 15px 30px
  .bottom-help
    font-size 15px
    margin-top 20px
    font-weight 500
  .main-cont
    text-align center
</style>
