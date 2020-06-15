import axios from 'axios'

export const AxiosWithAuth =()=>{
    return axios.create({
        baseURL:'http://localhost:4000',
        headers:{
            authorization: sessionStorage.getItem('token')
        }
    })
}