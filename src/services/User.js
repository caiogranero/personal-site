import axios from "axios";

const UserInstance = axios.create({
  baseURL: `${process.env.BASE_URL}/user`,
  timeout: 30000
});

export default {
  install(Vue) {
    const UserService = {
      name: "UserService",

      get(params) {
        return UserInstance.get("/", {
          params: params
        });
      },

      getById(id) {
        return UserInstance.get(`/${id}`);
      }
    };
    Vue.$UserService = UserService;
    Vue.prototype.$UserService = UserService;
  }
};
