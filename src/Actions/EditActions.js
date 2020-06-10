

const sendEdit = (data)=>{
    return {type:'contactEdit', payload:data}
}

const endEdit = ()=>{
    return {type:'editComplete'}
}

export const setEdit = (object)=>{
    return function(dispatch){

        dispatch(sendEdit(object))

    }
}

export const stopEdit = ()=>{
    return function(dispatch){
        dispatch(endEdit())
    }
}