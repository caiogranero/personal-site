import axios from "axios";
import MiddlewareUtils from "./MiddlewareUtils";

const GoalsInstance = axios.create({
  baseURL: `http://localhost:1234/api/objetivos/`,
  timeout: 30000
});

MiddlewareUtils.useAuth(GoalsInstance);

export default {
  install(Vue) {
    const GoalsService = {
      name: "GoalsService",

      find() {
        return GoalsInstance.get();
      }
    };

    Vue.$GoalsService = GoalsService;
    Vue.prototype.$GoalsService = GoalsService;
  }
};
