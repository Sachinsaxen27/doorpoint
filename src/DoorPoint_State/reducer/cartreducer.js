const cartreducer = (state=1,action)=>{
    if(action.type==='AddItem'){
        return state + action.payload
    }
    else if(action.type==='RemoveItem'){
        if(state>1){
            return state - action.payload
        }
        else{
            return state
        }
    }
    else{
        return state=1
    }
}
export default cartreducer