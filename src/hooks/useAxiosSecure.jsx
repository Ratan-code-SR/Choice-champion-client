import axios from "axios";
import {  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create(
    {
        baseURL: import.meta.env.VITE_API_URL,
        withCredentials: true
    }
)

const useAxiosSecure = () => {
    const {logOutUser} = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log(error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                console.log("logout the user");
                logOutUser()
                    .then(() => {
                        navigate("/login")
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        }
        )

    }, [])
    return axiosSecure;
};

export default useAxiosSecure;