// Reducer
// Count variable will be 0 if state it empty
function counter(state, action) {
    if (state === undefined) {
        return {count: 0};
    }

    var count = state.count;

    // Reducer will have two action types "increase" and "decrease"
    switch(action.type) {
        case "increase":
        return {count: count + 1};
        
        case "decrease":
        return {count: count - 1};
        
        default:
        return state;
    }
}

export default counter;