import axios from "axios";

export const uploadImg = async (image: any) => {
  let file = new FormData();
  file.append("image", image, image.name);

  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:4000/upload/", file)
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
