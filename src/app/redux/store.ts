import { ITodo } from './todo';
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO, INIT_TODO } from './actions';

export interface IAppState {
    subjectList: ITodo[];
    // lastUpdate: Date;
}



export const INITIAL_STATE: IAppState = {
    subjectList: []
}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case ADD_TODO:
            action.todo.id = state.subjectList.length + 1;   
            return Object.assign({}, state, {
                subjectList: state.subjectList.concat(Object.assign({}, action.todo)),
            })
        
        case UPDATE_TODO:
            var subject = state.subjectList.find(t => t.id === action.todo.id);
            var index = state.subjectList.indexOf(subject);

            if(index==-1)
            {
                return Object.assign({}, state, {
                    subjectList: state.subjectList.concat(Object.assign({}, action.todo)),
                })
            }
            else
            {
                state.subjectList[index].status=action.todo.status 
                state.subjectList[index].subject=action.todo.subject 

                return Object.assign({}, state, {
                    subjectList: state.subjectList
                })
            }
            

        case REMOVE_TODO:
            return Object.assign({}, state, {
                subjectList: state.subjectList.filter(t => t.id !== action.id),
            })

        case INIT_TODO:
            return Object.assign({}, state, {
                subjectList: action.todo,
            })


    }
    return state;
}

