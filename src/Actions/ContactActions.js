import axios from 'axios'

const contactLoading = ()=>{
    return {type:'Contactloading'}
}

const getAllSuccess = (data)=>{
    return {type:'Contactsuccess', payload:data}
}

const contactDelete = (id)=>{
    return {type:'Contactdelete', payload:id}
}

const contactFailure = ()=>{
    return {type:'Contactfailure'}
}

//again, hard-coded for now, I'll make an custom built axios I can import to all actions that need it
let config={
    headers:{
        authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVkODFjNDkwNjFjNmM1NTA5ZmQzZGE1In0sImlhdCI6MTU5MTY1NzU5MCwiZXhwIjoxNTkyMDE3NTkwfQ.84_jYbm5-DwCn5Q7Jln8Ej0wD0fV9O6EIHN9uHGdUEY'
    }
}

export const getAll =()=>{

    return function(dispatch){

        dispatch(contactLoading())

        //hard-coded for now, but after we get the login token into session storage I'll make it dynamic
        return axios.get(`http://localhost:4000/contact/5ed81c49061c6c5509fd3da5`, config)

            .then(res=>{
                dispatch(getAllSuccess(res.data.contacts))
            })

            .catch(err=>{
                console.error(err.message)
                dispatch(contactFailure())
            })

    }
}

export const deleteById = (id)=>{

    return function(dispatch){

        dispatch(contactLoading())
        
        return axios.delete(`http://localhost:4000/contact/5ed81c49061c6c5509fd3da5/${id}`, config)

        .then(res=>{
            console.log(res.data)
            dispatch(contactDelete(id))
        })

        .catch(err=>{
            console.log(err)
            dispatch(contactFailure())
        })
    }

}