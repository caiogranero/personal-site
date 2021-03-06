import MiddlewareUtils from "./MiddlewareUtils";
import axios from "axios";

const DiseaseInstance = axios.create({
  baseURL: `http://localhost:1234/api/usuarios/`,
  timeout: 30000
});

MiddlewareUtils.useAuth(DiseaseInstance);

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
      },

      delete(idUsuario, idDoenca) {
        return DiseaseInstance.delete(`/${idUsuario}/doencas/${idDoenca}`);
      }
    };

    Vue.$DiseaseService = DiseaseService;
    Vue.prototype.$DiseaseService = DiseaseService;
  }
};
