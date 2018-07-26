import axios from "axios";

const MeasureInstance = axios.create({
  baseURL: `http://localhost:1234/api/usuarios/`,
  timeout: 30000
});

export default {
  install(Vue) {
    const MeasureService = {
      name: "MeasureService",

      create(userId, { nome }) {
        return MeasureInstance.post(`/${userId}/medidas`, {
          nome
        });
      },

      findAll(userId) {
        return MeasureInstance.get(`/${userId}/medidas`);
      },

      delete(userId, measureId) {
        return MeasureInstance.delete(`/${userId}/medidas/${measureId}`);
      }
    };

    Vue.$MeasureService = MeasureService;
    Vue.prototype.$MeasureService = MeasureService;
  }
};
