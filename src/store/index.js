import { createStore } from 'redux'


export const CREATE_TASK = 'CREATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const RESET_TASK_LIST = 'RESET_TASK_LIST';

let tasks = {
    "Daily": ["Walk Dog", "Feed Dog","Run Dishwasher", "Empty Dishwasher"],
    "Weekly": ["Water Plants", "Take out Trash", "Take out Recycling", "Watch the Bachelor"],
    "Monthly":  ["Pay Rent", "Pay Utilities",],
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
            newState.tasks[taskType].push(taskName)
            return newState
        }
        case DELETE_TASK:
            // const idx = action.taskId;
            // const newState = Object.assign(state)
            // newState.tasks
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

export const deleteTask = (taskId) => {
    return {
        type: DELETE_TASK,
        taskId
    }
}
