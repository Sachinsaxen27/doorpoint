// export const Add_Cart=(task)=>{
//     return (dispatch)=>{
//         dispatch({type:'Addcart',payload:task})
//     }
// }
// export const Edit_Todo=(id,task,status)=>{
//     return (dispatch)=>{
//         dispatch({
//             type:'Remove_Cart',
//             payload:{id,task,status}
//         })
//     }
// }
// export const Delete_Todo=(id)=>{
//     return (dispatch)=>{
//         dispatch({
//             type:'Delete_ToDO',
//             payload:id
//         })
//     }
// }
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