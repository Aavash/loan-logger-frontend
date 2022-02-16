import axios from 'axios';
import useStorage from '../hooks/useStorage';

const setToken =  (token, user) => {
    const { setItem } = useStorage();

    setItem('token', JSON.stringify(token));
    setItem('user', JSON.stringify(user));
} 

export const getToken = () => {
    const { getItem } = useStorage();
    
    const token = getItem('token')
    const user = getItem('user')
    // token = JSON.parse(token);
    // user = JSON.parse(user);
    return { user, token }
}

export const logoutUser = () => {
    const { removeItem } = useStorage();

    removeItem('token')
    removeItem('user')
} 

export const handleLogin = async (data) => {
    const response = await axios.post(
        `${process.env.API_BASE_URL}/v1/user-auth/signin`, data
        ).then((res) => {
            return res
        }).catch((err) => {
            console.log(err)
            console.log('there was an error')
            return err
        })
    
    if(response.status === 201){
        setToken(response.data.access_token)
    } 
    return response
}
