//@flow

import { AsyncStorage } from "react-native";

export const imageStore = {
  saveImage,
  getImage,
  deleteAllImages
};

const localUserImages = "@keepcalculating:_userImages";

async function saveImage(selectedValue: any) {
  try {
    if (!selectedValue) {
      selectedValue = [];
    }
    await AsyncStorage.setItem(localUserImages, JSON.stringify(selectedValue));
    return true;
  } catch (error) {
    throw error;
  }
}

async function getImage() {
  try {
    let value = await AsyncStorage.getItem(localUserImages);
    let selectedValue = JSON.parse(value);
    if (!selectedValue) {
      selectedValue = [];
    }
    return Promise.resolve(selectedValue);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}

async function deleteAllImages() {
  try {
    await AsyncStorage.removeItem(localUserImages);
    console.log("deleted: ", localUserImages);
    return true;
  } catch (error) {
    return false;
  }
}
