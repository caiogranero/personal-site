import axios from "axios";

const DrugInstance = axios.create({
  baseURL: `http://localhost:1234/api/usuarios/`,
  timeout: 30000
});

export default {
  install(Vue) {
    const DrugService = {
      name: "DrugService",

      create(userId, { nome, descricao }) {
        return DrugInstance.post(`/${userId}/remedios`, {
          nome,
          descricao
        });
      },

      findAll(userId) {
        return DrugInstance.get(`/${userId}/remedios`);
      }
    };

    Vue.$DrugService = DrugService;
    Vue.prototype.$DrugService = DrugService;
  }
};
