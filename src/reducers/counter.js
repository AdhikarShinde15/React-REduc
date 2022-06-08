const actions = (state = { count : 10 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'ADDVALUE':
            return {
                count : state.count + action.payload
            }
        case 'RESET':
            return {
                count : 0
            }        
        default :
            return state;        
    }
   };

export default actions