import axios from "axios";

class HttpConfig {
  static baseurl = "";

  public axiosInstance = axios.create({
    baseURL: HttpConfig.baseurl,
  });
}
export default new HttpConfig().axiosInstance;
