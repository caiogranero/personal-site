import MiddlewareUtils from "./MiddlewareUtils";
import axios from "axios";

const MeasureInstance = axios.create({
  baseURL: `http://localhost:1234/api/usuarios/`,
  timeout: 30000
});

MiddlewareUtils.useAuth(MeasureInstance);

export default {
  install(Vue) {
    const MeasureService = {
      name: "MeasureService",

      create(userId, { nome }) {
        return MeasureInstance.post(`/${userId}/medidas`, {
          nome
        });
      },

      findAll(userId, params) {
        return MeasureInstance.get(`/${userId}/medidas`, params);
      },

      delete(userId, measureId) {
        return MeasureInstance.delete(`/${userId}/medidas/${measureId}`);
      },

      adicionarValorEmMedida(userId, measureId, { data, valor }) {
        return MeasureInstance.post(`/${userId}/medidas/${measureId}/valor`, {
          data,
          valor
        });
      }
    };

    Vue.$MeasureService = MeasureService;
    Vue.prototype.$MeasureService = MeasureService;
  }
};
