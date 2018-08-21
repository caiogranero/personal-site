import axios from "axios";
import MiddlewareUtils from "./MiddlewareUtils";

const DrugInstance = axios.create({
  baseURL: `http://localhost:1234/api/usuarios/`,
  timeout: 30000
});

MiddlewareUtils.useAuth(DrugInstance);

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
      },

      delete(idUsuario, idRemedio) {
        return DrugInstance.delete(`/${idUsuario}/remedios/${idRemedio}`);
      }
    };

    Vue.$DrugService = DrugService;
    Vue.prototype.$DrugService = DrugService;
  }
};
