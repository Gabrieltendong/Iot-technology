import { api } from "../config"
import { UserLogin } from "../interface/user.login";
import { UserRegister } from "../interface/user.register";

export const login = async (data: UserLogin) => {
    try{
        const resp = await api.post('/auth/login', data)
        return resp.data
    } catch (err) {
        return err.response.data;
    }
}


export const register = async (data: UserRegister) => {
    try{
        const resp = await api.post('/user/register', data)
        return resp.data
    } catch (err) {
        return err.response.data;
    }
}