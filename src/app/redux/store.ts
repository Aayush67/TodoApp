import { ITodo } from './todo';
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from './actions';

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
            console.log('aaa',state) 
            action.todo.id = state.subjectList.length + 1;   
            return Object.assign({}, state, {
                subjectList: state.subjectList.concat(Object.assign({}, action.todo)),
            })
        
        // case UPDATE_TODO:
        //     var todo = state.todos.find(t => t.id === action.id);
        //     var index = state.todos.indexOf(todo);
        //     return Object.assign({}, state, {
        //         todos: [
        //             ...state.todos.slice(0, index),
        //             Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
        //             ...state.todos.slice(index+1)
        //         ],
        //         lastUpdate: new Date()
        //     })

        case REMOVE_TODO:
        console.log('bbb',state)
            return Object.assign({}, state, {
                subjectList: state.subjectList.filter(t => t.id !== action.id),
                // lastUpdate: new Date()
            })

        // case REMOVE_ALL_TODOS:
        //     return Object.assign({}, state, {
        //         todos: [],
        //         lastUpdate: new Date()
        //     })
    }
    return state;
}

