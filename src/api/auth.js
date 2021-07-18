import Axios from "../Axios";

export const otp = async (payload,headers) => {
    const response = await Axios.post(`otp`, payload, {
        headers:headers
    });
    return response.data;
};

export const login = async (payload,headers) => {
    const response = await Axios.post(`login`, payload, {
        headers:headers
    });
    return response.data;
};