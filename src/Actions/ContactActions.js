
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


export const getAll =(userId)=>{

    return function(dispatch){

        dispatch(contactLoading())

        //hard-coded for now, but after we get the login token into session storage I'll make it dynamic
        return AxiosWithAuth().get(`/contact/${userId}`)

            .then(res=>{
                dispatch(getAllSuccess(res.data.contacts))
            })

            .catch(err=>{
                console.log(err)
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
            dispatch(contactFailure())
        })
    }

}