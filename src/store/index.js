import { createStore } from 'redux'


export const CREATE_TASK = 'CREATE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const RESET_TASK_LIST = 'RESET_TASK_LIST';

let tasks = {
    "Daily": [{"title": "Walk Dog", "completed": false, "category": "Daily"}, {"title":"Feed Dog", "completed": false, "category": "Daily"},{"title": "Run Dishwasher", "completed": false, "category": "Daily"}, {"title": "Empty Dishwasher", "completed": false, "category": "Daily"}],
    "Weekly": [{"title":"Water Plants", "completed": false, "category": "Weekly"}, {"title":"Take out Trash", "completed": false, "category": "Weekly"}, {"title": "Take out Recycling", "completed": false, "category": "Weekly"}, {"title": "Watch the Bachelor", "completed": false, "category": "Weekly"}],
    "Monthly":  [{"title": "Pay Rent", "completed": false, "category": "Monthly"}, {"title":"Pay Utilities", "completed": false, "category": "Monthly"},],
}

let categories = [
    "Daily",
    "Weekly",
    "Monthly"
]


export const tasksReducer = (state={tasks, categories}, action) => {
    switch (action.type) {
        case CREATE_TASK: {
            let taskType = action.payload.taskType
            let taskName = action.payload.taskName
            const newState = {...state}
            newState.tasks[taskType].push({"title": taskName, "completed": false, "category": taskType})
            console.log("newtask", newState.tasks[taskType])
            return newState
        }
        case COMPLETE_TASK:
            const newState = {...state}

            newState.tasks[action.payload.category].forEach(element => {
                if (element.title === action.payload.title) {
                    element.completed = !action.payload.completed;
                }
            });
            return newState
        case RESET_TASK_LIST:

        default:
            return state;
    }
}

const store = createStore(tasksReducer);

// export const createTask= (taskType) => {
//     return {
//         type: CREATE_TASK,
//         taskType
//     }
// }

export const completeTask = (payload) => {
    return {
        type: DELETE_TASK,
        payload
    }
}
