import Cookies from "js-cookie";
import iziToast from "izitoast";
import router from "../router";

const MiddlewareUtils = {
  useAuth(axiosInstance) {
    axiosInstance.interceptors.request.use(
      function(config) {
        config.headers["Authorization"] = Cookies.get("PERSONAL-TOKEN");
        // Do something before request is sent
        return config;
      },
      function(error) {
        console.log(error);
        // Do something with request error
        return Promise.reject(error);
      }
    );

    axiosInstance.interceptors.response.use(
      function(response) {
        // Do something with response data
        return response;
      },
      function(error) {
        iziToast.error({
          title: error.response.data.error,
          position: "topCenter"
        });

        router.push({ name: "Login" });

        return Promise.reject(error);
      }
    );
  }
};

export default MiddlewareUtils;
