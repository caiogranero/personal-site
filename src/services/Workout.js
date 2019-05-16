import MiddlewareUtils from "./MiddlewareUtils";
import axios from "axios";

const WorkoutInstance = axios.create({
  baseURL: `http://localhost:1234/api/usuarios/`,
  timeout: 30000
});

MiddlewareUtils.useAuth(WorkoutInstance);

export default {
  install(Vue) {
    const WorkoutService = {
      name: "WorkoutService",

      create(userId, { objetivo, observacao, dataInicio, dataFinal }) {
        return WorkoutInstance.post(`/${userId}/treinos`, {
          objetivo,
          observacao,
          dataInicio,
          dataFinal
        });
      }
    };

    Vue.$WorkoutService = WorkoutService;
    Vue.prototype.$WorkoutService = WorkoutService;
  }
};
