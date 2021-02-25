import { createStore } from 'redux'


const CREATE_TASK = 'CREATE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const RESET_TASK_LIST = 'RESET_TASK_LIST';

const tasksReducer = (state={tasks: []}, action) => {
    switch (action.type) {
        case CREATE_TASK: {
            const newTask = {
                taskType: action.taskType,
            }
            return {...state, tasks: [...state.tasks, newTask]}
        }
        case DELETE_TASK:
            const idx = action.taskId;
            const newState = Object.assign(state)
            newState.tasks
        case RESET_TASK_LIST:

        default:
            return state;
    }
}

const store = createStore(tasksReducer);

const createTask= (taskType) => {
    return {
        type: CREATE_TASK,
        taskType
    }
}

const deleteTask = (taskId) => {
    return {
        type: DELETE_TASK,
        taskId
    }
}

const 