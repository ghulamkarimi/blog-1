import axios from "axios";

const SERVER_URL = "http://localhost:4010/api/"


export const getAllBlogs = () => {
    const url = `${SERVER_URL}blog`;
   return axios.get(url)
};

export const getAllUsers = () => {
    const url = `${SERVER_URL}user`;
   return axios.get(url)
};