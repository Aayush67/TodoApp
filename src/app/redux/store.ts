import { ITodo } from './todo';
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from './actions';

export interface IAppState {
    subjectList: ITodo[];
    // lastUpdate: Date;
}


export const INITIAL_STATE: IAppState = {
    subjectList: [{
        "id":1,
        "subject": "subject A",
        "status": 1
      },
      {
        "id":2,
        "subject": "subject B",
        "status": 0
      },
      {
        "id":3,
        "subject": "subject C",
        "status": 0
      }]
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
            console.log('out',action.todo)

            if(index==-1)
            {
                return Object.assign({}, state, {
                    subjectList: state.subjectList.concat(Object.assign({}, action.todo)),
                })
            }
            else
            {
                console.log('ppppp',action.todo)
                // action.todo.id = state.subjectList.length + 1;
                state.subjectList[index].status=action.todo.status 
                state.subjectList[index].subject=action.todo.subject 

                return Object.assign({}, state, {
                    subjectList: state.subjectList
                })
            }
            

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

