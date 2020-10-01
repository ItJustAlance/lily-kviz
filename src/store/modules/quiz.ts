export default {
  actions: {
  },
  // мутация передаем  данные в хранилища(state)
  mutations: {
    // updatePosts(state, posts){ первый параметр state, второй параметр что мы в него будем передавать
    // SET_QUIZ_ANSWER(state, payload) {
      // обращаемся к state.posts и он будет равняться массиву  posts
    //  state.quizAnswer = payload;
    // },
    // Чтобы каждый раз не совершать сохранение, мы копим все данные в локальном хранилише, а потом передаем когда выводим результат
    SET_QUIZ_ANSWER(state, { answerTitle, answerCheck }) {
      // не знаю что это, надо узнать, пуш, это штука для работы с массивом, он добавляет туда поочередно новые данные в конец массива
      state.quizAnswer.push({answerTitle, answerCheck});
    },
  },
  // тут хранилище глобальных переменных
  state: {
    quiz: {
      title: 'Моя викторина',
      questions: [
        {
          text: 'Вопрос 1',
          responses: [
            {text: 'Неправильно, очень плохо.'},
            {text: 'Правильно!', correct: true},
          ],
        },
        {
          text: 'Вопрос 2',
          responses: [
            {text: 'Правильный ответ', correct: true},
            {text: 'Неправильный ответ'},
          ],
        },
        {
          text: 'Новый вопрос 2',
          responses: [
            {text: 'Правильный ответ', correct: true},
            {text: 'Неправильный ответ'},
            {text: 'Неправильный ответ 2'},
            {text: 'ответ 33'},
          ],
        },
      ],
    },
    quizAnswer: [],

  },
  // геттер забираем данные из хранилища(state)
  getters: {
    g_quiz(state) {
      return state.quiz;
    },
    g_quizAnswer(state) {
      return state.quizAnswer;
    },

  },
};
