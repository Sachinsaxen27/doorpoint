const itemview = (state, action) => {
    if (action.type === 'ViewItem') {
        return state = action.payload
    }
    else {
        const storedValue = localStorage.getItem('value');
        const parsedValue = storedValue ? JSON.parse(storedValue) : null;
        return state =parsedValue;
    }
}
export default itemview