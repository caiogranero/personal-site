import axios from "axios";
import MiddlewareUtils from "./MiddlewareUtils";

const MuscleInstance = axios.create({
  baseURL: `http://localhost:1234/api/musculos/`,
  timeout: 30000
});

MiddlewareUtils.useAuth(MuscleInstance);

export default {
  install(Vue) {
    const MuscleService = {
      name: "MuscleService",

      find() {
        return MuscleInstance.get();
      }
    };

    Vue.$MuscleService = MuscleService;
    Vue.prototype.$MuscleService = MuscleService;
  }
};
