import axios from 'axios';


const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = 'bd45368a';
const axiosInstance = axios.create(configOMB);

export const API = {
    searchFilmsByTitle (title: string)  {
        return  axiosInstance(
            {
                url:`?t=${title}&apikey=${key}`,
                method: 'get',
    })
    },
    searchFilmsByType: (title: string, type: string) => {
        return  axiosInstance(
            {
                url:`?t=${title}&type=${type}&apikey=${key}`,
                method: 'get',
            })
    },
};

