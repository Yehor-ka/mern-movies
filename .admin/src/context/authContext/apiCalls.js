import axios from 'axios';
import { loginFailure, loginStart, loginSuccess } from './AuthAction';


export const login = async (user, dispatch) => {
    dispatch(loginStart())
    try {
        const {data} = await axios.post('auth/login', user)
        data.isAdmin && dispatch(loginSuccess(data))
    } catch (error) {
        dispatch(loginFailure())
    }
}