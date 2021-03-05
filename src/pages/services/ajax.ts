import axios from "axios";

export default function ajax(url: string, type: string, data: any) {
  if (type === "GET") {
    let paramStr = "";
    Object.keys(data).forEach((key) => {
      paramStr += key + "=" + data[key] + "&";
    });
    if (paramStr) {
      //去除后面多余的 '&'
      paramStr.substring(0, paramStr.length - 1);
      url += "?" + paramStr;
    }
    return axios.get(url);
  } else {
    return axios.post(url, data);
  }
}
