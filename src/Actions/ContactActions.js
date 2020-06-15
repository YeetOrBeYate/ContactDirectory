import axios from 'axios'

import {AxiosWithAuth} from "./utils"

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

const createContact=(data)=>{
    return {type:'contactAdd', payload:data}
}

const updateContact = (id, object)=>{
    return {type:'contactEdit', payload:object, put:id}
}

//again, hard-coded for now, I'll make an custom built axios I can import to all actions that need it
// let config={
//     headers:{
//         authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVkODFjNDkwNjFjNmM1NTA5ZmQzZGE1In0sImlhdCI6MTU5MTY1NzU5MCwiZXhwIjoxNTkyMDE3NTkwfQ.84_jYbm5-DwCn5Q7Jln8Ej0wD0fV9O6EIHN9uHGdUEY'
//     }
// }

export const getAll =(userId)=>{

    return function(dispatch){

        dispatch(contactLoading())

        //hard-coded for now, but after we get the login token into session storage I'll make it dynamic
        return AxiosWithAuth().get(`/contact/${userId}`)

            .then(res=>{
                dispatch(getAllSuccess(res.data.contacts))
            })

            .catch(err=>{
                console.error(err.message)
                dispatch(contactFailure())
            })

    }
}

export const deleteById = (userId,id)=>{

    return function(dispatch){

        dispatch(contactLoading())
        
        return AxiosWithAuth().delete(`/contact/${userId}/${id}`)

        .then(res=>{
            // console.log(res.data)
            dispatch(contactDelete(id))
        })

        .catch(err=>{
            console.log(err)
            dispatch(contactFailure())
        })
    }

}

export const addContact=(userId,object)=>{
    return function(dispatch){
        dispatch(contactLoading())

        return AxiosWithAuth().post(`/contact/${userId}/`, object)

        .then(res=>{
            let newContact = res.data.contact
            dispatch(createContact(newContact))
        })

        .catch(err=>{
            console.log(err)
            dispatch(contactFailure())
        })

    }
}

export const editContact = (userId,id, object)=>{
    return function(dispatch){

        dispatch(contactLoading())

        return AxiosWithAuth().put(`/contact/${userId}/${id}`, object)

        .then(res=>{
            let updatedContact = res.data.contact
            dispatch(updateContact(id, updatedContact))
        })

        .catch(err=>{
            console.log(err)
        })
    }

}