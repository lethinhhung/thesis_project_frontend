import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.BACKEND_URL || "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

//Alter defaults after instance has been created
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "access_token"
    )}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const ignoredUrls = ["/auth/login"];
    const requestUrl = originalRequest.url;

    // Nếu lỗi 401 và chưa thử refresh token
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !ignoredUrls.some((url) => requestUrl.includes(url))
    ) {
      originalRequest._retry = true;

      try {
        // Gọi API refresh token (cookie được gửi tự động)
        const response = await instance.post("/auth/refresh-token");

        // Lưu access token mới
        const { accessToken } = response.data.data;
        localStorage.setItem("accessToken", accessToken);

        // Thêm token mới vào header và thử lại request ban đầu
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        // Nếu refresh token cũng hết hạn, đăng xuất người dùng
        localStorage.removeItem("accessToken");

        return Promise.reject(refreshError);
      }
    }
    if (error?.response) return error?.response;
    return Promise.reject(error);
  }
);

export default instance;
