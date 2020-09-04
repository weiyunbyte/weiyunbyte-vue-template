/* eslint-disable */
export function useInterceptor(axiosInstance) {
  axiosInstance.interceptors.request.use(
    function(config) {
      const token = sessionStorage.getItem("__user__");
      if (token) {
        config.headers.common["Authorization"] = token;
      }
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    function(response) {
      const token = response.headers["authorization"];
      if (token) {
        sessionStorage.setItem("__user__", token);
      }
      if (response.data.errno === 0) {
        return response.data;
      } else {
        return Promise.reject(new Error(response.data.msg));
      }
    },
    function(error) {
      return Promise.reject(new Error("Network failed"));
    }
  );
}
