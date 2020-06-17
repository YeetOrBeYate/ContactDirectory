import axios from 'axios'

export const AxiosWithAuth =()=>{
    return axios.create({
        baseURL:'https://kyle-contact-keeper.herokuapp.com',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            authorization: sessionStorage.getItem('token')
        }
    })
}