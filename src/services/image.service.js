import { imageStore } from "../store/ImageStore";

export default (imageService = {
  save,
  get
});

function save(imageSaving: object) {
  imageStore.getImage().then(localImage => {
    let newArray = localImage;
    newArray.push(imageSaving);
    imageStore.saveImage(newArray);
  });
}

function get() {
  let promise: any = imageStore.getImage().then(imagesArray => {
    return Promise.resolve(imagesArray);
  });
  return promise;
}
