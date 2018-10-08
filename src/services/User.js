import MiddlewareUtils from "./MiddlewareUtils";
import axios from "axios";

const UserInstance = axios.create({
  baseURL: `http://localhost:1234/api/usuarios`,
  timeout: 30000
});

MiddlewareUtils.useAuth(UserInstance);

export default {
  install(Vue) {
    const UserService = {
      name: "UserService",

      novoUsuario({ nome, email, senha }, code) {
        return UserInstance.post("/", {
          nome,
          email,
          senha,
          code
        });
      },

      getAlunos(id) {
        console.log(id);
        return UserInstance.get(`/${id}/alunos`);
      },

      findAll() {
        return UserInstance.get("/");
      },

      get(params) {
        return UserInstance.get("/", {
          params: params
        });
      },

      getById(id) {
        return UserInstance.get(`/${id}`);
      },

      edit(id, params) {
        return UserInstance.patch(`/${id}`, params);
      }
    };

    Vue.$UserService = UserService;
    Vue.prototype.$UserService = UserService;
  }
};
