import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    alert('Unable to store data.');
    throw e;
  }
  alert('Saved');
};

export const getData = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    throw e;
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    alert('Unable to remove data.');
    throw e;
  }
  alert('Removed!');
};

export const mergeData = async (key, value) => {
  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(value));
  } catch (e) {
    alert('Unable to change data.');
    throw e;
  }
  alert('Changes Saved');
};