

const sendEdit = (data)=>{
    return {type:'contactEdit', payload:data}
}

export const setEdit = (object)=>{
    return function(dispatch){

        dispatch(sendEdit(object))

    }
}