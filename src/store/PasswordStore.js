//@flow

import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import _ from "lodash";

export const passwordStore = {
  savePassword,
  getPassword,
  deletePassword
};

const localUserPassword = "@keepcalculating:_userPassword";

async function savePassword(selectedValue: any) {
  try {
    console.log("saving: ", selectedValue);
    if (!selectedValue) {
      selectedValue = "";
    }
    await AsyncStorage.setItem(
      localUserPassword,
      JSON.stringify(selectedValue)
    );
    return true;
  } catch (error) {
    throw error;
  }
}

async function getPassword() {
  try {
    let value = await AsyncStorage.getItem(localUserPassword);
    let selectedValue = JSON.parse(value);
    if (!selectedValue) {
      selectedValue = "";
    }
    return Promise.resolve(selectedValue);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}

async function deletePassword() {
  try {
    await AsyncStorage.removeItem(localUserPassword);
    console.log("deleted: ", localUserPassword);
    return true;
  } catch (error) {
    return false;
  }
}
