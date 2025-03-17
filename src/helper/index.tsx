import Server from "../config/constants/server";
import CryptoJS from "crypto-js";

/**
 * Retrieves a value from local storage using the provided key.
 * The value is decrypted with the aes secret provided in the server constants.
 * If the value is not found, null is returned.
 * @param key The key to retrieve the value from local storage
 * @returns The decrypted value from local storage or null if the value is not found
 */
// export const getStorageData = (key: string) => {
//   const data = localStorage.getItem(key) ?? localStorage.getItem(key);
//   // Decrypt
//   if (data) {
//     const bytes = CryptoJS.AES.decrypt(data, Server.crypto.AES_SECRET);
//     const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//     return !decryptedData ? {} : decryptedData;
//   }
//   return null;
// };

export const getStorageData = (key: string) => {
  const data = localStorage.getItem(key);
  // Decrypt
  if (data) {
    try {
      const bytes = CryptoJS.AES.decrypt(data, Server.crypto.AES_SECRET);
      const decryptedDataString = bytes.toString(CryptoJS.enc.Utf8);
      if (decryptedDataString) {
        const decryptedData = JSON.parse(decryptedDataString);
        return !decryptedData ? {} : decryptedData;
      } else {
        return null;
      }
    } catch (error) {
      console.error(`Error decrypting data: ${error}`);
      return null;
    }
  }
  return null;
};

/**
 * Stores a value in local storage under the specified key.
 * The value is encrypted using AES encryption with the secret provided in server constants.
 *
 * @param key - The key under which the value will be stored in local storage
 * @param value - The value to be stored, which will be encrypted before storage
 */
export const setStorageData = <T,>(key: string, value: T) => {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(value),
    Server.crypto.AES_SECRET
  ).toString();
  localStorage.setItem(key, ciphertext);
};

/**
 * Removes the value stored in local storage under the specified key.
 *
 * @param key The key of the value to be removed from local storage
 */
export const removeStorageData = (key: string) => {
  localStorage.removeItem(key);
};

export const optionpPicker = (
  data: any[],
  valuekey: string = "_id",
  labelkey: string = "name"
) => {
  return data.map((item: any) => ({
    value: item[valuekey],
    label: item[labelkey],
    data: {
      _id: item[valuekey],
      name: item[labelkey],
      image_url: item?.image_url,
      slug: item?.slug,
    },
  }));
};
