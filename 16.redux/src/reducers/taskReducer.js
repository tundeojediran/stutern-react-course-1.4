const initialState = {
    tasks: [],
}; 


const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        case "UPDATE_TASK": 
        break;
        default:
            return state;
    }
};

export default taskReducer;
