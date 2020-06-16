import axios from 'axios'

const loading=()=>{
    return {type:'Registerloading'}
}

const addUser = ()=>{
    return {type:'Registersuccess'}
}

export const registerUser = (user)=>{
    console.log('reg function called')
    return function(dispatch){

        dispatch(loading())

        return axios.post('http://localhost:4000/users', user)

        .then(res=>{
            console.log(res.data)
            dispatch(addUser())
        })

        .catch(err=>{
            console.log(err)
            dispatch({
                type:'Registerfailure'
            })
        })
    }

}

export const resetRegister = ()=>{
    return function(dispatch){
        dispatch({
            type:'registerReset'
        })
    }
}