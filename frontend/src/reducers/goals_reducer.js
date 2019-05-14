import { 
    RECEIVE_GOALS, 
    RECEIVE_GOAL,
    RECEIVE_USER_GOALS
    } from '../actions/goal_actions'; 

const goalsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_GOALS: 
            return action.goals; 
        case RECEIVE_GOAL: 
            newState[action.goal.id] = action.goal; 
            return newState; 
        // case RECEIVE_USER_GOALS: 
        //     newState.user = action.goals.data; 
        //     return newState; 
        default: 
            return state; 
    }
};

export default goalsReducer; 