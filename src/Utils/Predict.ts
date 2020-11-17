import axios from "axios";
import { IRequest } from "../Utils/ValidateRequest";

export const makePrediction = async (req: IRequest) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:4000/upload/", req)
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject(res.statusText.toLowerCase());
        }
      })
      .catch((e) => {
        reject(e.message);
      });
  });
};
