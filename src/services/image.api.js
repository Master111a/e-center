import axios from "axios";
import {
  createImageURL,
  deleteImageURL,
  getAllImageURL,
  updateImageURL,
} from "./routers";
const axiosJWT = axios.create();
//create
export const createImageAPI = async (data) => {
  try {
    const res = await axios.post(`${createImageURL}`, data);
    return res.data;
  } catch (error) {
    return error;
  }
};

//update
export const updateImageAPI = async (id, data, access_token) => {
  try {
    const res = await axiosJWT.put(`${updateImageURL}/${id}`, data, {
      headers: {
        Authorization: access_token,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
// delete
export const deleteImageAPI = async (id, access_token) => {
  try {
    const res = await axiosJWT.delete(`${deleteImageURL}/${id}`, {
      headers: {
        Authorization: access_token,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
// Lay tat ca
export const getAllImageAPI = async () => {
  try {
    const res = await axios.get(`${getAllImageURL}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
