//Process action and create new state
const initial_state = {
    dataEmployee: []
}

const employeeReducer = (state = initial_state, action) => {
    if (action.type = 'getData') {
        return {...state, dataEmployee: action.payload}
    } else {
        return state;
    }
}

export default employeeReducer;