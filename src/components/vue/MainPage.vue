<template lang="pug">
.page
  .main-cont
    h1 Узнайте за 2 минуты стоимость дизайн-проекта, ответив на 4 вопроса
    button.btn-start-quiz Узнать стоимость и срок
    .bottom-help После прохождения теста вы получите: <br><br>
      | 1. расчет стоимости вашего дизайн-проекта <br>
      | 2. сроки разработки проекта

</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "MainPage",
  components: {

  },
  computed:{


  }
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
    font-size 28px
    line-height 1.2
    margin-bottom 80px
  .btn-start-quiz
    font-size 20px
    margin-bottom 80px
    border-radius 3px
    background #b80505
    border none
    color #fff
    padding 20px 35px
  .bottom-help
    font-size 16px
    margin-bottom 20px
    font-weight 500
  .main-cont
    text-align center
</style>
