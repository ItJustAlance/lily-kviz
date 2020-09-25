

export default {
  actions: {
  },
  // мутация передаем  данные в хранилища(state)
  mutations: {
    // updatePosts(state, posts){ первый параметр state, второй параметр что мы в него будем передавать
    SET_QUIZ_ANSWER(state, quizAnswer){
      // обращаемся к state.posts и он будет равняться массиву  posts
      state.quizAnswer = quizAnswer;
    },
  },
  // тут хранилище глобальных переменных
  state: {
    quiz: {
      title: 'Моя викторина',
      questions: [
        {
          text: "Вопрос 1",
          responses: [
            {text: 'Неправильно, очень плохо.'},
            {text: 'Правильно!', correct: true},
          ]
        }, {
          text: "Вопрос 2",
          responses: [
            {text: 'Правильный ответ', correct: true},
            {text: 'Неправильный ответ'},
          ]
        }
      ]
    },
    quizAnswer: [],

  },
  // геттер забираем данные из хранилища(state)
  getters: {
    g_quiz(state){
      return state.quiz;
    },

  }
}
