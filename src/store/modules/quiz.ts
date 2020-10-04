import axios from 'axios';

export default {
  // тут хранилище глобальных переменных
  state: {
    quiz: [],
    quizAnswer: [],
  },
  actions: {
    GET_QUIZ_FROM_API: ({commit}) => {
      return axios('http://test1.p-store.ru/json.php', {
        method: "GET",
        headers: { 'content-type': 'application/json' },
      })
        .then((quiz) => {
          commit('SET_QUIZ_TO_STATE', quiz.data);
          return quiz;
        })
        .catch((error) => {
          console.log(error)
          return error;
        })
    },
  },
  // мутация передаем  данные в хранилища(state)
  mutations: {
    // записываем json в хранилище, при обращении к ACTIONS
    SET_QUIZ_TO_STATE(state, payload) {
      state.quiz = payload;
    },
    // Чтобы каждый раз не совершать сохранение, мы копим все данные в локальном хранилише, а потом передаем когда выводим результат
    SET_QUIZ_ANSWER(state, { answerTitle, answerCheck }) {
      /* не знаю что это, надо узнать, пуш, это штука для работы с массивом, он добавляет туда поочередно новые данные в конец массива */
      state.quizAnswer.push({answerTitle, answerCheck});
    },
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
