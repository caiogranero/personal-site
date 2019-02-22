import axios from "axios";

const AuthInstance = axios.create({
  baseURL: `http://localhost:1234/api/token/`,
  timeout: 30000
});

export default {
  install(Vue) {
    const AuthService = {
      name: "AuthService",

      doLogin({ email, senha }) {
        return AuthInstance.get(`/`, {
          params: {
            email,
            senha
          }
        });
      },

      doFacebookLogin({ email, facebookId, nome }) {
        return AuthInstance.get(`/facebook`, {
          params: {
            email,
            facebookId,
            nome
          }
        });
      }
    };

    Vue.$AuthService = AuthService;
    Vue.prototype.$AuthService = AuthService;
  }
};
