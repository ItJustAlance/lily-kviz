<template lang="pug">
  #app.over
    // из компонента MainPage получаем значение из метода emit.onshowquiz в родителя, которое получаем только привязав его к компоненту из которого получаем, далее можно использовать в родители
    // из компонента MainPage достаем emit и показываем его родителям, родители понимаю что у нас замочки в этой коробочке и далее могут эти замочки кудато переложить
    MainPage(v-on:isquiz="toggleQuiz" v-if="ShowPage == 1")
    Quiz(v-if="ShowPage == 2" v-on:isthanks="toggleThanks")
    // Thanks(v-if="ShowPage == 3")
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      ShowQuiz: false,
      ShowThanks: false,
      ShowPage: 1,
    }
  },
  components: {},
  methods: {
    toggleQuiz(value){
      this.ShowPage = value;
      console.log('child component said login', this.ShowQuiz);
    },
    toggleThanks(value){
      this.ShowPage = value;
      console.log('child component said login', this.ShowThanks);
    },
  },
};
</script>

<style lang="sass">
#app
  max-width: 1074px
  margin: 0 auto
</style>
