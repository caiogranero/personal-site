import axios from "axios";
import MiddlewareUtils from "./MiddlewareUtils";

const ActivityInstance = axios.create({
  baseURL: `http://localhost:1234/api/atividades/`,
  timeout: 30000
});

MiddlewareUtils.useAuth(ActivityInstance);

export default {
  install(Vue) {
    const ActivityService = {
      name: "ActivityService",

      Get() {
        return ActivityInstance.get();
      }
    };

    Vue.$ActivityService = ActivityService;
    Vue.prototype.$ActivityService = ActivityService;
  }
};
