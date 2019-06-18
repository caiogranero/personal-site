import axios from "axios";
import firebase from "firebase";
import { resolve } from "url";

const UserInstance = axios.create({
  baseURL: `http://localhost:1234/api/usuarios`,
  timeout: 30000
});

const TokenInstance = axios.create({
  baseURL: `http://localhost:1234/api/token/`,
  timeout: 30000
});

export default {
  install(Vue) {
    const AuthService = {
      name: "AuthService",

      logout() {
        return firebase.auth().signOut();
      },

      doLogin({ email, senha }) {
        return firebase
          .auth()
          .signInWithEmailAndPassword(email, senha)
          .then(result => {
            const firebaseId = result.user.uid;
            return TokenInstance.get(`/`, {
              params: {
                firebaseId
              }
            });
          });
      },

      doFacebookLogin() {
        let provider = new firebase.auth.FacebookAuthProvider();
        return this.checkSocialUser(provider);
      },

      checkSocialUser(provider) {
        return firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            const firebaseId = result.user.uid;
            return this.getTokenByFirebaseId(firebaseId)
              .then(currentToken => currentToken)
              .catch(() => {
                return result.user.getIdToken(true).then(tokenId => {
                  return this.localRegister({
                    nome: result.user.displayName,
                    email: result.user.email,
                    firebaseId,
                    tokenId,
                    code: undefined
                  }).then(() => this.getTokenByFirebaseId(firebaseId));
                });
              });
          });
      },

      doGoogleLogin() {
        let provider = new firebase.auth.GoogleAuthProvider();
        return this.checkSocialUser(provider);
      },

      doRegister({ nome, email, senha }, code) {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(email, senha)
          .then(res => {
            const { isNewUser } = res.additionalUserInfo;
            const firebaseId = res.user.uid;
            return res.user.getIdToken(true).then(tokenId => {
              if (isNewUser) {
                return this.localRegister({
                  nome,
                  email,
                  firebaseId,
                  tokenId,
                  code
                });
              } else {
                return new Promise().then(() => resolve());
              }
            });
          });
      },

      localRegister({ nome, email, firebaseId, tokenId, code }) {
        return UserInstance.post("/", {
          nome,
          email,
          firebaseId,
          tokenId,
          code
        });
      },

      getTokenByFirebaseId(firebaseId) {
        return TokenInstance.get(`/`, {
          params: {
            firebaseId
          }
        });
      }
    };

    Vue.$AuthService = AuthService;
    Vue.prototype.$AuthService = AuthService;
  }
};
