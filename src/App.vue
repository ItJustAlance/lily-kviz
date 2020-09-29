<template lang="pug">
  #app.over
    // из компонента MainPage получаем значение из метода emit.onshowquiz в родителя, которое получаем только привязав его к компоненту из которого получаем, далее можно использовать в родители
    // из компонента MainPage достаем emit и показываем его родителям, родители понимаю что у нас замочки в этой коробочке и далее могут эти замочки кудато переложить
    MainPage(v-on:isquiz="toggleQuiz" v-if="!ShowQuiz")
    Quiz(v-if="ShowQuiz")
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      ShowQuiz: false
    }
  },

  components: { },
  methods: {
    toggleQuiz(value){
      this.ShowQuiz = value;

      console.log('child component said login', this.ShowQuiz);
    },
  },
};
</script>

<style lang="sass">
#app
  max-width: 1074px
  margin: 0 auto
</style>
