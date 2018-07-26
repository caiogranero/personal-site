import axios from "axios";

const DiseaseInstance = axios.create({
  baseURL: `http://localhost:1234/api/usuarios/`,
  timeout: 30000
});

export default {
  install(Vue) {
    const DiseaseService = {
      name: "DiseaseService",

      create(userId, { nome, descricao }) {
        return DiseaseInstance.post(`/${userId}/doencas`, {
          nome,
          descricao
        });
      },

      findAll(userId) {
        return DiseaseInstance.get(`/${userId}/doencas`);
      }
    };

    Vue.$DiseaseService = DiseaseService;
    Vue.prototype.$DiseaseService = DiseaseService;
  }
};
