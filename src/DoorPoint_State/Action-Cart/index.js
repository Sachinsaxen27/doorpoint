export const AddItem=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'AddItem',
            payload:amount
        })
    }
    }
export const RemoveItem=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'RemoveItem',
            payload:amount
        })
    }
    }
export const ViewItem=(items)=>{
    return(dispatch)=>{
        dispatch({
            type:"ViewItem",
            payload:items
        })
    }
}