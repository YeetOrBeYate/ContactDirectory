import axios from 'axios'

const loginLoading = ()=>{
    return {type:'Loginloading'}
}

const setLogin = (token, id)=>{
    return {type:'Loginsuccess', token:token, id:id}
}

export const loginUser = (userInfo)=>{

    return function(dispatch){

        dispatch(loginLoading())

        
        return axios.post(`http://localhost:4000/auth`, userInfo)
    
        .then(res=>{
            sessionStorage.setItem('token', res.data.token)
            sessionStorage.setItem('userId', res.data.userid)

            dispatch(setLogin(res.data.token, res.data.userid))

        })

        .catch(err=>{
            console.log(err)
            dispatch({
                type:'Loginfailure'
            })
        })
    }

}

export const resetLogin = ()=>{
    return function(dispatch){
        dispatch({
            type:'loginReset'
        })
    }
}

export const logout = ()=>{
    return function(dispatch){
        dispatch({
            type:'logout'
        })
    }
}