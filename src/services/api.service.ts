import axios from "axios";
import {baseURL} from "../urls/urls";

const Access_Token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDVjNzg3Y2QwNDFlYTk5YzUxZTQ0YmU1MTcyNWQ2YiIsInN1YiI6IjY2NzFhMGMwNWQxMmJkMTFlMGUyMmUzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uglLtzCmaFkkS6ZJ18MfmjWObf4u-0n99Wedq5gkMxc'
const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use(cfg => {
    cfg.headers.Authorization = Access_Token;
    return cfg;
});

export {
    axiosService,
};