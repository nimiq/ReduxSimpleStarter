// State argument is not the global state, but only the piece of state this
// reducer is registered for in the rootReducer.
export default function(state=null, action) {
    // NOTE: never mutate the state, but return a new object.
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}
